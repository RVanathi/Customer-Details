import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import NewCustomer from "./NewCustomer";
import CustomerList from "./CustomerList";
import CustomerDetail from "./CustomerDetail";
import Data from "./MOCK_50_DATA.json";
import EditCustomer from "./EditCustomer";
import Home from "./Home";

function App() {
  const uniqueID = uuid(); // for unique ID creation
  const LOCAL_STORAGE_KEY = "customers"; // list of customers in local storage

  //USE STATE HOOKS
  const [customers, setCustomer] = useState(Data);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [currentID, setCurrentID] = useState("");
  const [currentDetail, setCurrentDetail] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    membership: "",
  });

  //RETRIEVING DETAILS BASED ON ID
  const currentCustomer = (id) => {
    setCurrentID(id);
    setCurrentDetail(
      customers.find((customer) => {
        return customer.id === id;
      })
    );
  };

  //EDITTING EXISTING CUSTOMER DETAILS
  const updateDetail = (c) => {
    setCustomer(
      customers.map((customer) => {
        if (customer.id === currentID) {
          return { ...customer, ...c };
        }
        return customer;
      })
    );
  };

  //ADDING A NEW ENTRY TO THE LIST OF CUSTOMERS
  const newCustomer = (customer) => {
    const newInfo = { id: uniqueID, ...customer };
    setCustomer([...customers, newInfo]);
  };

  //DELETING AN ENTRY IN THE LIST OF CUSTOMERS
  const deleteCustomer = (id) => {
    setCustomer(
      customers.filter((customer) => {
        return customer.id !== id;
      })
    );
  };

  //SEARCHING FOR A CUSTOMER
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newCustomerList = customers.filter((customer) => {
        // console.log(Object.values(customer)[1] + Object.values(customer)[3]);
        return (customer.name + customer.phone) // Seach by "Name" or "Phone number"
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setResults(newCustomerList);
    } else {
      setResults(customers);
    }
  };

  //RETRIEVE CUSTOMER DATA FROM LOCAL STORAGE
  useEffect(() => {
    const retrieveDetails = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveDetails) setCustomer(retrieveDetails);
  }, []);

  //SENDING CUSTOMER DATA TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customers));
  }, [customers]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/list"
            element={
              <CustomerList
                customers={searchTerm.length < 1 ? customers : results}
                onDelete={deleteCustomer}
                term={searchTerm}
                searchKeyWord={searchHandler}
                currentCustomer={currentCustomer}
              />
            }
          />
          <Route
            exact
            path="/customer/new"
            element={<NewCustomer newCustomer={newCustomer} />}
          />
          <Route
            exact
            path="/customer/:id"
            element={<CustomerDetail viewDetails={currentDetail} />}
          />
          <Route
            exact
            path="/customer/edit/:id"
            element={
              <EditCustomer editDetail={currentDetail} update={updateDetail} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
