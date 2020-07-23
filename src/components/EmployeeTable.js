import React from "react";
import Table from 'react-bootstrap/Table';
import Employees from "../employees.json";
import EmployeeRow from "./EmployeeRow";

const EmployeeTable = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
            </thead>
            <tbody>
            {Employees.map(employee => {
                return (
                <EmployeeRow employee={employee}/>
                )
            })}
            </tbody>
        </Table>
    );
}

export default EmployeeTable;