import React, {useState} from "react";
import {Button, ButtonToolbar, Form, Modal, Table} from "react-bootstrap";


export default function Makers(props) {

    const [showModal, setShowModal] = useState(false);
    const [makers, setMakers] = useState([])
    const [formValue, setFormValue] = useState({
        makerName: ""
    });




    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr className={'text-center'}>
                    <th>ID</th>
                    <th>Maker Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    makers.map((maker) =>
                        <tr>
                            <td>{maker.id}</td>
                            <td>{maker.makerName}</td>
                        </tr>
                    )}
                </tbody>
            </Table>


            <Button className={"m-2"} variant="primary" onClick={() => setShowModal(true)}>Add</Button>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter the data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className={"mt-3"}>
                            <Form.Label>Maker Name</Form.Label>
                            <Form.Control
                                placeholder="Enter Maker Name"
                                type="name"
                                value={formValue.makerName}
                                onChange={event => setFormValue({...formValue, makerName: event.target.value})}
                            />
                        </Form.Group>
                        <ButtonToolbar className="justify-content-end mt-3">
                            <Button type="submit">Add data</Button>
                        </ButtonToolbar>
                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    );
}

