import React from 'react'
import AdminLayout from '../../components/layout/AdminLayout'
import { Col, Container, Row } from 'react-bootstrap'
import SideBar from '../../components/sidebar/SideBar'
import BorrowHistoryTable from '../../components/book-table/BorrowHistoryTable'

const BorrowHistory = () => {
  return (
    <AdminLayout>
      <Container>
        <Row fluid>
        <Col sm='3' className=' side-bar'>
            <SideBar />
          </Col>
          <Col>
          <div className="mt-2">
            <h3>Borrow History</h3>
            <hr />

            <BorrowHistoryTable />
          </div>
          </Col>
        </Row>

      </Container>
    </AdminLayout>
  )
}

export default BorrowHistory
