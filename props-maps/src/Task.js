import React from 'react'
import { Table } from 'react-bootstrap';
const Task = () => {
  return (
    <>
      <ProductTable />
    </>
  )
}


const ProductInfo = [
  {
    productName: "Wireless Headphones",
    category: "Electronics",
    price: "$120",
    stockStatus: "In Stock",
    image: "headphones.jpg",
    image_url: 'https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fHww'
  },
  {
    productName: "Running Shoes",
    category: "Footwear",
    price: "$85",
    stockStatus: "Out of Stock",
    image: "shoes.jpg",
    image_url: 'https://images.unsplash.com/photo-1673542971494-70b6ad4f890f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdHdhcmV8ZW58MHx8MHx8fDA%3D'
  },
  {
    productName: "Smartphone",
    category: "Electronics",
    price: "$699",
    stockStatus: "In Stock",
    image: "smartphone.jpg",
    image_url: 'https://images.unsplash.com/photo-1596742578443-7682ef5251cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    productName: "Backpack",
    category: "Accessories",
    price: "$45",
    stockStatus: "In Stock",
    image: "backpack.jpg",
    image_url: 'https://images.unsplash.com/photo-1480859786001-3f3bfdf20f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D'
  }];


function ProductTable() {
  return (
    <>
      <Table bordered hover striped className=' table-secondary container'>
        <tbody>
          <tr>
            <th>SR NO</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
          </tr>
          {
            ProductInfo.map((item, index) => {
              return <SubProductTable srno={index + 1} pName={item.productName} pCategory={item.category} pPrice={item.price} pStock={item.stockStatus} pImg={item.image_url} />
            })
          }
        </tbody>
      </Table>
    </>
  );
}
function SubProductTable(props) {
  return (
    <>
      <tr>
        <td>{props.srno}</td>
        <td>{props.pName}</td>
        <td>{props.pCategory}</td>
        <td>{props.pPrice}</td>
        <td>{props.pStock}</td>
        <td><img src={props.pImg} alt="no-img" style={{ width: '150px', height: '150px' }} /></td>
      </tr>
    </>
  );
}
export default Task