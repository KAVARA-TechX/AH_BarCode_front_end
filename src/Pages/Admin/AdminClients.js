import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getB2BUsers, getRetailUsers } from "../../Functions/auth";

const AdminClients = ({ history }) => {
  const [users, setUsers] = useState([]);
  const [retail, setRetail] = useState([]);
  useEffect(() => {
    if (window.localStorage.getItem("userName") !== "admin") {
      history.push("/admin");
    }
    getB2BUsers()
      .then((res) => setUsers(res.data.users))
      .catch((err) => console.log(err));

    getRetailUsers()
      .then((res) => setRetail(res.data.retail))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(users, "in state");
  }, [users]);

  const handleClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
    localStorage.setItem(
      "sb|sidebar-toggle",
      document.body.classList.contains("sb-sidenav-toggled")
    );
  };
  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.removeItem("userName");
    history.push("/admin");
  };
  return (
    <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          AH International
        </div>
        <div className="list-group list-group-flush">
          <Link
            to="/admin/add-product"
            className="list-group-item list-group-item-action list-group-item-light p-3"
          >
            Add Product
          </Link>
          <Link
            to="/admin/products"
            className="list-group-item list-group-item-action list-group-item-light p-3"
          >
            Products
          </Link>
          <Link
            to="/admin/orders"
            className="list-group-item list-group-item-action list-group-item-light p-3"
          >
            Orders
          </Link>
          <Link
            to="/admin/clients"
            className="list-group-item list-group-item-action list-group-item-light p-3"
          >
            Clients
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      </div>
      <div id="page-content-wrapper" className="ml-3 scrollbar">
        <i
          className="fas fa-bars ml-2"
          id="sidebarToggle"
          onClick={handleClick}
        ></i>
        <h4 className="mt-4 ml-2">B2B Clients</h4>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Phone no.</th>
              <th scope="col">Designation</th>
              <th scope="col">Department</th>
              <th scope="col">Address</th>
            </tr>
            {users !== null &&
              users.map((users) => (
                <tr>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td></td>
                  <td>{users.phoneNumber}</td>
                  <td></td>
                  <td></td>
                  <td>{users.address}</td>
                </tr>
              ))}
          </thead>
        </table>
        <h4 className="mt-4 ml-2">Retail Clients</h4>
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">Role</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Phone no.</th>
              <th scope="col">Designation</th>
              <th scope="col">Department</th>
              <th scope="col">Address</th>
            </tr>
            {retail !== undefined &&
              retail.map((retailUser) => (
                <tr>
                  <td>{retailUser.name}</td>
                  <td>{retailUser.email}</td>
                  <td></td>
                  <td>{retailUser.phoneNumber}</td>
                  <td></td>
                  <td></td>
                  <td>{retailUser.address}</td>
                </tr>
              ))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default AdminClients;
