import React, { useState } from "react";

const EditCustomer = ({ editDetail, update }) => {
  const { name, email, phone, address, membership } = editDetail;

  const [state, setState] = useState({
    name,
    email,
    phone,
    address,
    membership,
  });

  //HANDLING TEXT INPUT IN THE FORM
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  //HANDLING SUBMISSION OF EDITTED ENTRY
  const onSubmit = (e) => {
    e.preventDefault();
    update(state);
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
        <h2 className="title">Edit Customer Details</h2>
        <div className="details">
          <div className="input-box">
            <label className="fields">Full Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-box">
            <label className="fields">Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleInput}
              required
            />
          </div>
          <div className="input-box">
            <label className="fields">Phone Number: </label>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={state.phone}
              onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <label className="fields">Address: </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={state.address}
              onChange={handleInput}
            />
          </div>
          <div className="input-box">
            <label className="fields"> Membership: </label>
            <input
              type="text"
              name="membership"
              placeholder="'Classic' or 'Premium'"
              value={state.membership}
              onChange={handleInput}
              required
            />
          </div>
          <button className="button">Update</button>
        </div>
      </div>
    </form>
  );
};
export default EditCustomer;
