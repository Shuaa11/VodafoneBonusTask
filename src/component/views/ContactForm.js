import React, { useState } from 'react'

const ContactForm = props => {
    const [fName, setfName] = useState('');
    const [lName, setlName] = useState('');
    const [phone, setPhone] = useState('');

    const submitValue = () => {
        const frmdetails = {
            'name': fName,
            'email': lName,
            'number': phone,
        }
        console.log(frmdetails);
    }

    return (
        <>
            <hr />
            <input type="text" placeholder="First Name" onChange={e => setfName(e.target.value)} />
            <input type="text" placeholder="Last Name" onChange={e => setlName(e.target.value)} />
            <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
            <button onClick={submitValue}>Submit</button>
        </>
    )
}

export default  ContactForm 
