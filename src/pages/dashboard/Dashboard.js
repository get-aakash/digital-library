import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { useSelector } from 'react-redux'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const {user} = useSelector(state=>state.user)
  console.log(user)
  return (
    <AdminLayout>
      <Container fluid>
        <Row>
          <Col sm='3' className=' side-bar'>
            <h3>Welcome</h3>
            <hr />
            <ul>
            <li>
              <Link to="/admin/books">Books</Link>
              </li>
              <li>
              <Link to="/admin/new">New Book</Link>
              </li>
              <li>
              <Link to="/history">History</Link>
              </li>
              <li>
              <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </Col>
          <Col md="9">
            <h5 className="mt-2">Dashboard</h5>
            <hr />
              <div className="page-content d-flex gap-2">
                <Card style={{width: "18rem"}}>
                  <Card.Body>
                    Account Status: Active
                  </Card.Body>
                </Card>

                <Card style={{width: "18rem"}}>
                  <Card.Body>
                    Account Borrowed: <span className='fw-bold fs-2'>3</span>
{''}                  </Card.Body>
                </Card>

                
                <Card style={{width: "18rem"}}>
                  <Card.Body>
                    Totlal Borrowed: <span className='fw-bold fs-2'>30</span>
{''}                  </Card.Body>
                </Card>
              </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  )
}

export default Dashboard
