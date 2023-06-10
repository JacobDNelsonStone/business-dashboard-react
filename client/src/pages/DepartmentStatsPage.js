import React from "react"
import { EmployeeList, DepartmentStats } from "../components"
import { Col, Container, Row } from "react-bootstrap"
import { useEmployeeContext } from "../ctx/EmployeeContext"

function DepartmentStatsPage() {
    const { currEmployee } = useEmployeeContext()

    return (
        <div>
            <DepartmentStats></DepartmentStats>
        </div>
    )
}

export default DepartmentStatsPage