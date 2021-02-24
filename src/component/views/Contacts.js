import React, { useState, useEffect } from "react";
import '../../App.css';

// Import Of Json File 
const contacts = require('../data/data.json');




// Component for Showing Contact Cards from Json File 
const Contacts = props => {
    // arrays of rows for showing columns of cards in row
    const rows = [];

    //array of columns for showing cards in row
    let columns = [];

    // they will be used in alphabetical search
    const [letters, setLetters] = useState('');

    // click function will set the the value of letter which is clicked
    const click = (value) => {
        setLetters(value)
    };


    // Group First Alphabet of Contact Names for Alphabetical Filtering 
    let data = contacts.reduce((r, e) => {
        // get first letter of name of current element
        let group = e.name[0];
        // if there is no property in accumulator with this letter create it
        if (!r[group]) r[group] = { group, children: [e] }
        // if there is push current element to children array for that letter
        else r[group].children.push(e);
        // return accumulator
        return r;
    }, {})

    // since data at this point is an object, to get array of values
    // we use Object.values method
    let result = Object.values(data)

    // Search filter for both query and alphabetical search
    const filterNames = ({ name }) => {
        // if letter filter is clicked then match  character at zero index
        if (letters)
            return name.charAt(0).toLowerCase() === letters.toLowerCase()
        // if query search then match words
        else
            return name.toLowerCase().indexOf(props.searchLetter.toLowerCase()) !== -1;

    };
    //this will filter contacts and create rows and columns
    contacts.filter(filterNames).forEach((data, i) => {
        const comp = (
            <div className="col-md-4">
                {console.log(data.number)}
                <div className="card shadow-sm rounded-0" key={i}>
                    <div className="card-body">
                        <h5 className="card-title p-2">{data.name}</h5>
                        <p className="card-text">{data.email} <br />{data.number}</p>
                    </div>
                </div>
            </div>
        );


        // push the columns 
        columns.push(comp);

        // condition will be true when modulus value is zero and columns length is 3
        if ((i + 1) % 3 === 0 && columns.length === 3) {
            // push the row after every three columns
            rows.push(
                <div className="row">
                    {columns}
                </div>);

            // when column length is 3 empty the array for next row
            columns = [];
        }

    });
    // to push the remaining columns
    if (columns.length) {
        rows.push(<div className="row">{columns}</div>);
    }
    return (
        <div className="contacts-container">
            {/* Alphabetical Searching Of Array Of Contacts List */}
            <ul onBlur={() => setLetters('')} className="pagination pagination-md justify-content-center fw-bold">
                {result.map((item, i) => <li key={i} className="page-item" onClick={() => click(item.group)}><a className="page-link border-0 text-dark" href="#">{item.group}</a></li>)}
            </ul>

            {/* Show  Cards Every Row has three Columns */}
            {rows}
        </div>
    )
}



export default Contacts