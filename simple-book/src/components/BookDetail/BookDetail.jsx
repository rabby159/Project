import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  // console.log(book.tags);
  //bookId, , image, author, category, rating, tags

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-base-100 my-10 gap-10">
      <figure className="p-10 bg-base-200">
        <img src={book.image} alt="books" className="rounded-xl" />
      </figure>
      <div className="col-span-2">
        <h2 className="font-bold text-4xl mb-1">{book.title}</h2>
        <p className="font-semibold mt-2">Author: {book.author}</p>
        <p className="border-y-1 border-gray-500 py-3 my-5">{book.category}</p>
        <p>
          <span className="font-semibold ">Review:</span> {book.review}
        </p>
        <p className="my-5 border-b-1 border-gray-500 pb-4">
          <span className="font-semibold ">Tags:</span> {book.tags}
        </p>
        <p>
          Number Of Pages:{" "}
          <span className="font-semibold ">{book.totalPages}</span>{" "}
        </p>
        <p>
          Publisher: <span className="font-semibold ">{book.publisher}</span>
        </p>
        <p>
          Year Of Publishing:{" "}
          <span className="font-semibold ">{book.yearOfPublishing}</span>{" "}
        </p>
        <div className="card-actions mt-7 ">
          <button className="btn">Read</button>
          <button className="btn btn-info text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
