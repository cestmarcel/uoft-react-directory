import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Employees from "../employees.json";
import EmployeeRow from "./EmployeeRow";
import "./EmployeeTable.css";

function compare(sortingParam){
    return (a, b) => {
        const elementA = a[sortingParam].toUpperCase();
        const elementB = b[sortingParam].toUpperCase();
    
        let comparison = 0;
        if (elementA > elementB) {
        comparison = 1;
        } else if (elementA < elementB) {
        comparison = -1;
        }
        return comparison;
    }
}

const EmployeeTable = ({searchTerm}) => {
    let filteredEmployees = Employees;
    if(searchTerm){
        filteredEmployees = Employees.filter(record => record.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    const [sortingParam, setSortingParam] = useState("name");
    const [sortingDirection, setDirection] = useState("asc");

    function setSorting(newParam){
        if(sortingParam === newParam){
            const newDirection = sortingDirection === "asc" ? "desc" : "asc";
            setDirection(newDirection);
        } else {
            setSortingParam(newParam);
            setDirection("asc");
        }
    }

    if(sortingDirection === "asc"){
        filteredEmployees.sort(compare(sortingParam));       
    } else {
        filteredEmployees.sort(compare(sortingParam)).reverse();
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr className="table-header">
                <th onClick={() => setSorting("image")}>Image</th>
                <th onClick={() => setSorting("name")}>Name</th>
                <th onClick={() => setSorting("phone")}>Phone</th>
                <th onClick={() => setSorting("email")}>Email</th>
                <th onClick={() => setSorting("dob")}>DOB</th>
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