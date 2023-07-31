import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

const TableList = ({ data, setShowModal, setSelectedUser }) => {
  const showEditModal = (e) => {
    console.log(e.target.id)
    const editId = e.target.id;
    const id = editId.split("-")[1]
    setShowModal(true)
    data.map(item => {
      if (Number(id) === item.id) {
        setSelectedUser(item);
      }
    })
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Edit</th>
          </tr>
        </thead>
        {data?.map((item, index) => {
          return (<tbody>
            <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td><Button id={`edit-${index + 1}`} onClick={showEditModal}><i id={`edit-${index + 1}`} class="bi bi-pencil-square"></i></Button></td>
            </tr>
          </tbody>)
        })}
      </Table>
    </div>
  )
}

export default TableList
