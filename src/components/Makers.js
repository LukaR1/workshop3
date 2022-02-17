import React, {useEffect, useState} from "react";
import {Button, ButtonToolbar, Form, Modal, Table} from "react-bootstrap";
import api from "../utils/api";



export default function Makers(props) {

    const [showModal, setShowModal] = useState(false);
    const [makers, setMakers] = useState([])
    const [formValue, setFormValue] = useState({
        makerName: ""
    });

    const getMakers = async () => {
        const res = await api.get('/makers')
        setMakers(res.data)
    }

    useEffect(() => {
        getMakers().catch(console.error)
    }, [])


    const addMakers = async (e) => {
        e.preventDefault();
        await api.post('/makers', {maker_name: formValue.makerName});
        await getMakers();
    }


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
                        <tr key={maker.id}>
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
                    <Form onSubmit={addMakers}>
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
                            <Button type="submit" >
                                Add data
                            </Button>
                        </ButtonToolbar>
                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    );
}

