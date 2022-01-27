import {Table} from "react-bootstrap";
import React from "react";

function Categories(props){
    return(
        <Table striped bordered hover>
            <thead>
            <tr className={'text-center'}>
                <th>#</th>
                <th>id</th>
                <th>parent id</th>
                <th>category name</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>

            </tr>
            <tr>
                <td>2</td>

            </tr>
            <tr>
                <td>3</td>
            </tr>
            </tbody>
        </Table>
    )
}

export default Categories;