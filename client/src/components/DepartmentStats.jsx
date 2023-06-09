import { Container, Col, Row, Card } from "react-bootstrap"
import { useState, useEffect } from "react";

function DepartmentStats(props) {
    const [stats, setStats] = useState([])

    // GETS stats
    const getStats = async () => {
        try {
            const query = await fetch('/api/department', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const res = await query.json()
            console.log(res)
            if (res) {
                setStats(res.payload)
                console.log(stats)
            }
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getStats()
    }, [])

    // prints each department stat in their own row
    return (
        <>
            {stats && stats.map(stat => (
                <Container>
                    <Row>
                        <h1 className="content fs-5 bg-primary text-light">{stat.employeeId.fname} {stat.employeeId.lname}</h1>
                    </Row>
                    <Row>
                        <Col>
                            <p className="fs-6">Monthly Earnings: {stat.monthlyEarnings}</p>
                        </Col>
                        <Col>
                            <p className="fs-6">Monthly Costs: {stat.monthlyCosts}</p>
                        </Col>
                        <Col>
                            <p className="fs-6">Projected Sales: {stat.projectedSales}</p>
                        </Col>
                    </Row>
                </Container>
            )
            )}
        </>
    )
}

export default DepartmentStats