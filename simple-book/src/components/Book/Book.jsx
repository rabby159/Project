import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, title, image, author, category, rating, tags } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div>
        <div className="card bg-base-100 border-1 border-zinc-400 p-5 lg:h-[417px]">
          <figure className="py-10 bg-base-200">
            <img
              src={image}
              alt="books"
              className="rounded-xl w-[101px] h-[166px] "
            />
          </figure>
          <div className="p-2">
            {tags.map((tag, index) => (
              <div key={index} className="badge text-green-500 bg-gray-100">
                {tag}
              </div>
            ))}
          </div>
          <div className="card-body">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="font-semibold">Author: {author}</p>
            <div className="card-actions border-t-1 border-dashed border-b-zinc-400 pt-2 items-center">
              <p>{category}</p>
              <h3>{rating}</h3>
              <CiStar className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
