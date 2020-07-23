import React from "react";
import Table from 'react-bootstrap/Table';
import Employees from "../employees.json";
import EmployeeRow from "./EmployeeRow";
import "./EmployeeTable.css";

const EmployeeTable = ({searchTerm}) => {
    let filteredEmployees = Employees;
    if(searchTerm){
        filteredEmployees = Employees.filter(record => record.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr className="table-header">
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            </thead>
            <tbody>
            {filteredEmployees.map(employee => {
                return (
                <EmployeeRow key={employee.name} employee={employee}/>
                )
            })}
            </tbody>
        </Table>
    );
}

export default EmployeeTable;