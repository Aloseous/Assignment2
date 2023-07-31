import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const UserModal = ({ setShowModal, selectedUser, setSelectedUser, updateChanges }) => {

    const closeModal = () => {
        setShowModal(false)
    }

    const handleChange = (e) => {
        const objName = e.target.id;
        setSelectedUser({ ...selectedUser, [objName]: e.target.value });
    }


    return (
        <div className="modal show" style={{ display: 'block', position: 'absolute' }}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group>
                                <Col className='d-flex align-center m-2'>
                                    <Form.Label className='col-4'>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="First name"
                                        defaultValue=""
                                        value={selectedUser.firstName}
                                        onChange={handleChange}
                                        id={'firstName'}
                                    />
                                </Col>
                                <Col className='d-flex align-center m-2'>
                                    <Form.Label className='col-4'>Last name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Last name"
                                        defaultValue=""
                                        value={selectedUser.lastName}
                                        id={'lastName'}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col className='d-flex align-center m-2'>
                                    <Form.Label className='col-3'>Email</Form.Label>
                                    <Form.Control className='offset-md-1'
                                        required
                                        type="text"
                                        placeholder="email"
                                        defaultValue=""
                                        value={selectedUser.email}
                                        id={'email'}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col className='d-flex align-center'>
                                    <Form.Label className='col-4'>Contact</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="phone no.."
                                        defaultValue=""
                                        value={selectedUser.phone}
                                        id={'phone'}
                                        onChange={handleChange}
                                    />
                                </Col>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary" onClick={updateChanges}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default UserModal;