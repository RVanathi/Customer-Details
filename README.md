## ASSIGNMENT : Build a front-end application

Description: Design and build a simple frontend application with the goal of listing and exposing content details,
with the following requirements:

· Use a framework of choice (e.g. React, Vue.js, etc).

· Define your own content: e.g. Customers (including information like full name, address, phone number, etc).

· Search and list content (e.g. list of customers, search by phone number).

· View and edit content details.

· Use mock content.

## React App - Customer Details

This is a simple customer details application built in React. It lists the customers, their full details (full name, email, phone address and membership) can be viewed separately. It lets us search the list by name or phone number, add, edit and delete an entry. The data is stored in and retrieved from the local storage.

### COMPONENTS

1.  Header : Has the buttons to navigate to other pages.
2.  Home : Home page
3.  CustomerList : For listing the details and to search for a particular customer detail by name or phone number.
4.  CustomerDetail : For each entry in the list. Has 'name' and 'membership' along with the 'view'👁'edit'✏ and 'delete'❌ icons.
5.  CustomerInfo : For viewing complete details of a particular customer.
6.  EditCustomer : For editing particular entry.
7.  NewCustomer : For adding a new entry.
