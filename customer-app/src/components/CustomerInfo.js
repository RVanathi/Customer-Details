import React from "react";
import { Link } from "react-router-dom";

const CustomerInfo = (props) => {
  const { id, name, membership } = props.customer;

  return (
    <section className="customer-library">
      <div className="customer-list">
        <div className="customer-section">
          <div className="list-item">
            <p className="customer-name">{name}</p>
            <p className="membership">{membership}</p>
          </div>
          <div className="list-item">
            <Link to={`/customer/${id}`}>
              <i className="material-icons" onClick={() => props.onView(id)}>
                remove_red_eye
              </i>
            </Link>
            <Link to={`/customer/edit/${id}`}>
              <i
                className="material-icons"
                onClick={() => {
                  props.onEdit(id);
                }}
              >
                edit
              </i>
            </Link>
            <i className="material-icons" onClick={() => props.onDelete(id)}>
              delete
            </i>
          </div>
        </div>
        <hr></hr>
      </div>
    </section>
  );
};

export default CustomerInfo;
