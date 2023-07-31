import React, { useEffect, useState } from 'react'
import TableList from './TableList';
import UserModal from './UserModal';
import { Card } from 'react-bootstrap'
import {getUserData, postUserData} from '../actions/user'
import './styles.css'

const UserList = () => {
    const [userData, setUserData] = useState(null)    
    const [showModal, setShowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    useEffect(() => {
         getUser();
    }, [])

    const getUser = async () => {
         const {result} = await getUserData();
         console.log('result-->',result)
        setUserData(result)
     }

     const updateChanges = () => {
        setShowModal(false);
        postUserData(selectedUser);
        const updateuserData = userData.map(item => {
           if(selectedUser.id === item.id){
            return selectedUser;
           }else {
            return item
           }
        })
        setUserData(updateuserData);
        console.log('updateuserData -->',updateuserData)

     }
 

    return (
        <div className='container'>
            <Card className='my-3 bg-dark'>
            <Card.Title className='text-white'>Users</Card.Title>
            </Card>
            {/* {userData && 
            } */}
            <TableList data={userData} setShowModal={setShowModal} setSelectedUser={setSelectedUser}/>
            {showModal && selectedUser && 
            <UserModal setShowModal={setShowModal} selectedUser={selectedUser} setSelectedUser={setSelectedUser} updateChanges= {updateChanges}/>
            }
        </div>
    )
}

export default UserList;
