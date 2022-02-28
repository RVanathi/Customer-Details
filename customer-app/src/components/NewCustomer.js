import React, { useState } from "react";

const NewCustomer = ({ newCustomer }) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    membership: "",
  });

  //HANDLING TEXT INPUT IN THE FORM
  const textInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  //HANDLING SUBMISSION OF NEW ENTRY
  const onSubmit = (e) => {
    e.preventDefault();
    newCustomer(state);
    setState({
      name: "",
      email: "",
      phone: "",
      address: "",
      membership: "",
    });
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="container">
        <h2 className="title">New Customer Registration</h2>
        <p>Please fill in this form to be a registered customer.</p>
        <div className="details">
          <div className="input-box">
            <label className="fields">Full Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={state.name}
              onChange={textInput}
              required
            />
          </div>
          <div className="input-box">
            <label className="fields">Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={textInput}
              required
            />
          </div>
          <div className="input-box">
            <label className="fields">Phone Number: </label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your phone number"
              value={state.phone}
              onChange={textInput}
            />
          </div>
          <div className="input-box">
            <label className="fields">Address: </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={state.address}
              onChange={textInput}
            />
          </div>
          <div className="input-box">
            <label className="fields"> Membership: </label>
            <input
              type="text"
              name="membership"
              placeholder="Enter membership type - 'Classic' or 'Premium'"
              value={state.membership}
              onChange={textInput}
              required
            />
          </div>
          <button className="button">Register</button>
        </div>
      </div>
    </form>
  );
};
export default NewCustomer;
