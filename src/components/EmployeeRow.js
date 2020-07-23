import React from "react";

const EmployeeRow = ({employee}) => {
    return (
        <tr key={employee.name}>
            <td><img src={employee.image} alt={employee.name} style={{width: "150px"}}/></td>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>{employee.dob}</td>
        </tr>
    )
}

export default EmployeeRow;