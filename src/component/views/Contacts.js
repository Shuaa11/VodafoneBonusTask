import React, { useState, useEffect } from "react";
import '../../App.css';
const contacts = require('../data/data.json');





const Contacts = props => {
    const gridCols = [[], [], []];
    const [letters, setLetters] = useState('');


    const click = (value) => {
        setLetters(value)
    };


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

    console.log(result)
    const filterNames = ({ name }) => {
        console.log('lett' + letters)
        if (letters)
            return name.charAt(0).toLowerCase() === letters.toLowerCase()
        else
            return name.toLowerCase().indexOf(props.searchLetter.toLowerCase()) !== -1;

    };
    contacts.filter(filterNames).forEach((data, i) => {
        const comp = (
            <div>
                {console.log(data.number)}
                <div className="card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text">{data.email} <br />{data.number}</p>
                    </div>
                </div>
            </div>
        );

        const colNumber = i % 3;
        gridCols[colNumber].push(comp);

    });
    return (
        <div  className="container">
            <ul onBlur={() =>setLetters('')}  className="pagination pagination-md justify-content-center">
                {result.map((item,i) => <li key ={i} className="page-item" onClick={() => click(item.group)}><a className="page-link border-0 text-dark" href="#">{item.group}</a></li>
                )

                }
            </ul>
            <div className="row">
                <div className="col-sm ">
                    {gridCols[0]}
                </div>
                <div className="col-sm ">
                    {gridCols[1]}
                </div>
                <div className="col-sm ">
                    {gridCols[2]}
                </div>
            </div>

        </div>
    )
}



export default Contacts
