const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dhl2xpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    //Jobs related API
    const jobsCollection = client.db("myChoiceJobPortal").collection("jobs");
    const jobApplicationCollection = client
      .db("myChoiceJobPortal")
      .collection("job_application");

    //Auth related APIs
    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .cookie("tokenName", token, {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
    });

    //All Jobs data
    app.get("/jobs", async (req, res) => {
      const email = req.query.email;
      let query = {};

      if (email) {
        query = {
          hr_email: email,
        };
      }

      const cursor = jobsCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    //Jobs data based on the Jobs ID
    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    //Job post
    app.post("/jobs", async (req, res) => {
      const newJobs = req.body;
      const result = await jobsCollection.insertOne(newJobs);
      res.send(result);
    });

    //insert application data
    app.post("/job-applications", async (req, res) => {
      const application = req.body;
      const result = await jobApplicationCollection.insertOne(application);

      res.send(result);
    });

    //get application based on applicant email
    app.get("/job-application", async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
      const result = await jobApplicationCollection.find(query).toArray();

      //find job based on job ID
      for (const application of result) {
        const queryForJob = { _id: new ObjectId(application.job_id) };
        const resultForJob = await jobsCollection.findOne(queryForJob);
        if (resultForJob) {
          application.title = resultForJob.title;
          application.company = resultForJob.company;
          application.location = resultForJob.location;
          application.company_logo = resultForJob.company_logo;
          application.jobType = resultForJob.jobType;
        }
      }

      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("basic API");
});

app.listen(port, () => {
  console.log(`Job Portal Server is running by: ${port}`);
});
