import React, { useState } from "react";
import logo from './vodafone_logo.svg';
import './App.css';
import Contacts from './component/views/Contacts';
import SearchBar from "./component/views/SearchBar";
import ContactForm from "./component/views/ContactForm";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [flag, setFlage] = useState(false);

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Contact List</title>
      {/* CSS only */}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
      <link rel="stylesheet" href="./style.css" />
      <div className="container ">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">&nbsp;
              <img src={logo} alt="" width={200} height={50} />
            </a>
            <form className>
              {/* <input className="form-control me-2" type="search" placeholder="Search for contact" aria-label="Search" /> */}
              <SearchBar onSearch={setSearchValue} value={searchValue} />

            </form>
          </div>
        </nav>
        <h2>Contacts
          <hr />
        </h2>
        {flag && (
          <ContactForm/>
        )}
        {!flag && (
          <Contacts searchLetter={searchValue} />)}

        {/* Footer */}
        <footer className=" mt-auto text-center ">
          {/* Copyright */}
          <div className="text-center p-3">
            All Rights Reserved. VSSB 2018
          </div>
          {/* Copyright */}
        </footer>
      </div>
      <button type="button" onClick={() => setFlage(true)} className="btn btn-danger btn-circle btn-sm">+</button>
      {/* JavaScript Bundle with Popper */}

    </div>
  );

}

export default App;
