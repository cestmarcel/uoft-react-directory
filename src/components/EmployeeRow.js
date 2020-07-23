import React from "react";

const EmployeeRow = ({employee}) => {
    return (
        <tr>
            <td><img src={employee.image} style={{width: "150px"}}/></td>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
        </tr>
    )
}

export default EmployeeRow;