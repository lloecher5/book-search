import Header from "../../sectioning/header/header";

import { useState } from "react";
import "./style.css";
import Modal from "../../components/modal/modal";

function Search() {
  const [fieldData, setFieldData] = useState({
    author: null,
    title: null,
  });

  //state used to update the UI with data from API
  const [response, setResponse] = useState(null);

  //state used to render the description
  const [description, setDescription] = useState(null);

  const renderData = (data) => {
    //gets the information about the books from API
    const books = data.docs;

    const listOfBooks = books.map((book, index) => {
      return (
        <li data-bookid={book.key} key={index}>
          {book.title}
        </li>
      );
    });

    //sets the state to the array of html elements
    setResponse(listOfBooks);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.id;
    const fieldDataCopy = Object.assign({}, fieldData, {
      ...fieldData,
    });

    if (type === "author") {
      fieldDataCopy.author = value;
    } else {
      fieldDataCopy.title = value;
    }

    setFieldData(fieldDataCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //destructure the title and author into individual variables
    const { title, author } = fieldData;
    //sets the query in the fetch url based on what is inputted by the user
    const params = `${title ? "title=" + title : ""}${
      author ? "&author=" + author : ""
    }`;

    fetch(`http://openlibrary.org/search.json?${params}&limit=10
    `)
      .then((res) => res.json())
      .then((data) => renderData(data));
  };

  const secondFetch = (e) => {
    const bookid = e.target.dataset.bookid;
    console.log(bookid);
    fetch(`http://openlibrary.org${bookid}.json`)
      .then((res) => res.json())
      .then((data) => renderDescription(data));
  };

  const renderDescription = (data) => {
    const bookDescription = data.description;

    setDescription(bookDescription);
  };

  const removeModal = () => {
    setDescription(null);
  };

  return (
    <div>
      <Header />
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__field">
          <label htmlFor="author">Author </label>
          <input onChange={handleChange} id="author" type="text"></input>
        </div>
        <div className="form__field">
          <label htmlFor="title">Title </label>
          <input onChange={handleChange} id="title" type="text"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div className="results">
          <h2>Search Results</h2>
          <ul onClick={secondFetch} className="results__books">
            {response}
          </ul>
        </div>
      )}
      {description && (
        <Modal removeModal={removeModal} description={description} />
      )}
    </div>
  );
}

export default Search;
