import React from "react";

const CustomerDetail = ({ viewDetails }) => {
  const { name, email, phone, address, membership } = viewDetails;

  return (
    <div className="container">
      <div className="title">{name}</div>
      <div className="membership">{membership}</div>
      <br></br>
      <div>
        <i className="material-icons ">home</i> {address}
      </div>
      <div>
        <i className="material-icons ">mail</i> {email}
      </div>
      <div>
        <i className="material-icons ">call</i> {phone}
      </div>
    </div>
  );
};

export default CustomerDetail;
