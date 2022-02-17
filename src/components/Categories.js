import {Button, ButtonToolbar, Form, Modal, Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import api from "../utils/api";

export default function Categories(props) {
    const [showModal, setShowModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formValues, setFormValues] = useState({
        category_name: "",
        parent_id: ""
    })

     const getCategories = async () => {
         const response = await api.get('/categories')
         setCategories(response.data)
     }

     useEffect(()=> {
         getCategories().catch(console.error)
     },[])

     const addCategory = async (event) => {
         event.preventDefault();
         await api.post('/categories',{parent_id: formValues.parent_id, category_name: formValues.category_name})
         await getCategories()
     }

    return (

        <div>


            <Table striped bordered hover >
                <thead>
                <tr className={'text-center'}>

                    <th>ID</th>
                    <th>Category Name</th>
                    <th>Parent ID</th>

                </tr>
                </thead>
                <tbody>
                {
                    categories.map((category) =>
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.category_name}</td>
                            <td>{category.parent_id}</td>
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
                    <Form onSubmit={addCategory}>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                placeholder="Enter Category"
                                type="name"
                                value={formValues.category_name}
                                onChange={event => setFormValues({...formValues, category_name: event.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className={"mt-3"}>
                            <Form.Label>Parent ID</Form.Label>
                            <Form.Control
                                placeholder="Enter Parent ID"
                                name="parent id"
                                value={formValues.parent_id}
                                onChange={event => setFormValues({...formValues, parent_id: event.target.value})}
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

    )
}


