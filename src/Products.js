import React from "react";
import {Table} from "react-bootstrap";

function Products(props){
    return(
        <Table striped bordered hover>
            <thead>
            <tr className={'text-center'}>
                <th>#</th>
                <th>ean code</th>
                <th>product name</th>
                <th>description</th>
                <th>maker id</th>
                <th>category id</th>
                <th>sell price</th>
                <th>remaining</th>
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
    );
}
export default Products;