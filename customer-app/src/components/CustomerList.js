import React from "react";
import CustomerInfo from "./CustomerInfo";

const CustomerList = (props) => {
  const showList = props.customers.map((customer) => {
    return (
      <CustomerInfo
        customer={customer}
        key={customer.id}
        onDelete={props.onDelete}
        onView={props.currentCustomer}
        onEdit={props.currentCustomer}
      />
    );
  });

  //HANDLING SEARCH WORDS IN THE SEARCH BAR
  const search = (e) => {
    const value = e.target.value;
    props.searchKeyWord(value);
  };

  return (
    <div className="container">
      <h2 className="title">List of Customers</h2>
      <div className="search">
        <input
          className="prompt"
          type="text"
          placeholder="🔍Search..."
          value={props.term}
          onChange={search}
        />
        <p>Search by name or phone number.</p>
      </div>
      <div className="details">{showList}</div>
    </div>
  );
};

export default CustomerList;
