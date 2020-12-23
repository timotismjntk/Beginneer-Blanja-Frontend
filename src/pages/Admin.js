// import React from 'react';
// import '../App.css';
// import '../assets/css/style.css';
// import { Table, Button, Row, Col, 
//     Jumbotron, Container, Modal,
//     ModalHeader, ModalBody,
//     Form, Input, Label, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
// } from 'reactstrap';
// import Swal from 'sweetalert2'
// import {default as axios} from 'axios';
// import qs from 'querystring'
// import NavbarSeler from '../components/NavbarSeller'
// import My_admin from './pages/My_admin'
// const {REACT_APP_BACKEND_URL} = process.env

// class Admin extends React.Component {
//     constructor(){
//     super()
//     this.state = {
//         data: [],
//         dataKosong: [],
//     //   modalOpen2: false,
//         modalOpen: false,
//         dropdownOpen: false,
//         setDropdownOpen: false,
//         AddmodalOpen: false,
//         search: [],
//         name: '',
//         price: '',
//         store: '',
//         rating: '',
//         categoryId: '',
//         sort: 'ASC',
//         nameSort: 'Sort By'
//     }
//     }
//     searchChanged = (e) => {
//         this.setState({ search: e.target.value},()=>{
//         console.log(this.state)
//     })
//     }


//     changeInput = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//     },()=>{
//         console.log(this.state)
//     })
//     }

//     async componentDidMount(){
//         await this.getData()
//         console.log(REACT_APP_BACKEND_URL)
//     }

//     getData = async()=>{
//         alert(REACT_APP_BACKEND_URL)
//         try {
//             const {data} = await axios.get(`${REACT_APP_BACKEND_URL}manage/product`, { params: { orderBy: this.state.sort, search: this.state.search } })   
//             if (this.getData.status !== 400) {
//                 this.setState({data: data.data, nameSort: 'Sort By'})
//                 console.log(this.state)
//             } else if (this.getData.status === 400){
//                 this.setState({...data.dataKosong})
//             }
//         }catch (err) {
            
//         }
//     }

//     editItem = async (id)=> {
//     const {data} = await axios.get(`${REACT_APP_BACKEND_URL}manage/products/${id}`)
//     this.setState({modalOpen: true, ...data.data}, ()=>{
//     })
//     }

//     editformSubmit = async (e)=> {
//         e.preventDefault()
//         let edit = []
//         let {name, price, store, ratingId, categoryId} = '' // untuk membuat form input jadi kosong setelah disubmit
//         edit = qs.stringify({name: this.state.name, price: this.state.price, store: this.state.store, ratingId: this.state.ratingId, categoryId: this.state.categoryId})
//         console.log(this.state.data)
//         Swal.fire({
//             title: 'Do you want to save the changes?',
//             showDenyButton: true,
//             showCancelButton: true,
//             confirmButtonText: `Save`,
//             denyButtonText: `Don't save`,
//           }).then((result) => {
//             /* Read more about isConfirmed, isDenied below */
//             if (result.isConfirmed) {
//                 axios.put(`${REACT_APP_BACKEND_URL}manage/products/${this.state.productId}`, edit)
//               Swal.fire('Saved!', '', 'success')
//             } else if (result.isDenied) {
//               Swal.fire('Changes are not saved', '', 'info')
//             }
//           })
//         this.setState({modalOpen: false, name, price, store, ratingId, categoryId }
//         )
//     }
//     deleteItem = async (id)=> {
//         await axios.delete(`${REACT_APP_BACKEND_URL}manage/products/${id}`)
//             Swal.fire("Poof!", "Your file has been deleted!", "success");
//             this.setState({
//                 modalOpen: false
//             })
//         }

// // -----------------------------------------
  
// addItemHandler = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//   },()=>{
//       console.log(this.state)
//   })
// }

// addformSubmit = async (e) => {
//     e.preventDefault()
//     let {name, price, store, ratingId, categoryId} = '' // untuk membuat form input jadi kosong setelah disubmit
//     const add = qs.stringify({name: this.state.name, price: this.state.price, store: this.state.store, ratingId: this.state.ratingId, categoryId: this.state.categoryId})
//     Swal.fire({
//         title: 'Do you want to save the changes?',
//         showDenyButton: true,
//         showCancelButton: true,
//         confirmButtonText: `Save`,
//         denyButtonText: `Don't save`,
//       }).then((result) => {
//         if (result.isConfirmed) {
//             axios.post(`http://localhost:8080/manage/products/`, add)
//           Swal.fire('Saved!', '', 'success')
//         } else if (result.isDenied) {
//           Swal.fire('Changes are not saved', '', 'info')
//         }
//       })
//     this.setState({ name, price, store, ratingId, categoryId})
// }

//   render() {
//     const {data} = this.state
//     return(
//         <React.Fragment>
//             <NavbarSeler />
//             <Container className="mt-5 rounded">
//                 <Jumbotron>
//                     <h1 className="font-weight-bold">
//                         List of Product
//                     </h1>
                        
//                 <Button color="primary" onClick={()=>{this.setState({AddmodalOpen: true})}} className="mb-3 d-flex align-right">
//                     Add Item
//                 </Button>
//                 </Jumbotron>
//                 <div className="d-inline-flex mt-2 mb-3 w-50">
//                     <Input onChange={this.searchChanged} className="searchBar w-100 rounded" name="search" value={this.search} placeholder="Search product here"/>
//                     <Button className="rounded btn-info bg-info ml-2" onClick={this.getData} >
//                         <span className="material-icons text-light">Search</span>
//                     </Button>
//                     <UncontrolledDropdown>
//                         <DropdownToggle caret>
//                             {this.state.nameSort}
//                             </DropdownToggle>
//                         <DropdownMenu>
//                             <DropdownItem header><h5 className="text-danger">Ecommerce</h5></DropdownItem>
//                             <DropdownItem>
//                                 <Button onClick={() => this.setState({sort: 'ASC', nameSort: 'ASC'})} className="w-100">Ascending</Button>
//                             </DropdownItem>
//                             <DropdownItem>
//                                 <Button onClick={() => this.setState({sort: 'DESC', nameSort: 'DESC'})} className="w-100">Descending</Button>
//                             </DropdownItem>
//                         </DropdownMenu>
//                      </UncontrolledDropdown>
//                 </div>
//                 <div>
//                     <Table className="table table-hover">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>No</th>
//                                 <th>Name</th>
//                                 <th>Price</th>
//                                 <th>Store</th>
//                                 <th>RatingId</th>
//                                 <th>CategoryId</th>
//                                 <th>Options</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             { Object.keys(data).length && this.state.data.map(item => {
//                             return(
//                                 <React.Fragment>
//                                     <tr>
//                                         <th scope="row">1</th>
//                                         <td>{item.name}</td>
//                                         <td>{item.price}</td>
//                                         <td>{item.store}</td>
//                                         <td>{item.ratingId}</td>
//                                         <td>{item.categoryId}</td>
//                                         <td>
//                                             <Button color="warning" onClick={()=>{this.editItem(item.productId)}}>Edit</Button>&nbsp;
//                                             <Button color="danger" onClick={()=>{this.deleteItem(item.productId)}}>Delete</Button>
//                                         </td>
//                                     </tr>
//                                 </React.Fragment>
//                                   )
//                                 })
//                                 }
//                         </tbody>
//                     </Table>
//                 </div>
//             </Container>
//             <div className="bg-dark text-light py-5 mt-5">
//                 <Container>
//                     <Row>
//                         <Col>
//                             <h4>&copy; Ecommerce</h4>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//             {/* <AddModal /> */}
//             {/* --- Modal update */}
//             <Modal isOpen={this.state.modalOpen}>
//                 <ModalHeader>
//                     <span>Edit Item</span>
//                 </ModalHeader>
//                 <ModalBody>
//                 <Form onSubmit={this.editformSubmit}>
//                     <Label for="Name">Name Product</Label>
//                     <Input name="name" onChange={this.changeInput} value={this.state.name} placeholder="Name Product" />
//                     <Label for="Price">Price: <span className="text-secondary">Nominal Rupiah</span></Label>
//                     <Input onChange={this.changeInput} value={this.state.price} name="price" id="price" placeholder="0" />
//                     <Label for="Store">Store</Label>
//                     <Input onChange={this.changeInput} value={this.state.store} name="store" id="store" placeholder="Store Name" />
//                     <Label for="Rating Id">Rating: <span className="text-secondary">1 - 5</span></Label>
//                     <Input onChange={this.changeInput} value={this.state.ratingId} name="ratingId" id="rating" placeholder="1 - 5" />
//                     <Label for="Category">Category: <span className="text-secondary">1 - 10</span></Label>
//                     <Input onChange={this.changeInput} value={this.state.categoryId} name="categoryId" id="category" placeholder="1 - 10" />
//                 <div className="mt-3 d-flex justify-content-center">
//                     <Button className='btn-success'>Submit</Button>&nbsp;
//                     <Button onClick={()=>{this.setState({modalOpen: false})}}>Close</Button>
//                 </div>
//                 </Form>
//                 </ModalBody>
//             </Modal>
            

//             <Modal isOpen={this.state.AddmodalOpen}>
//                 <ModalHeader>
//                     <span>Add Item</span>
//                 </ModalHeader>
//                 <ModalBody>
//                     <Form onSubmit={this.addformSubmit}>
//                     <Label for="Name">Name Product</Label>
//                     <Input onChange={this.addItemHandler} value={this.state.name} name="name"  placeholder="Name Product" />
//                     <Label for="Price">Price: <span className="text-secondary">Nominal Rupiah</span></Label>
//                     <Input onChange={this.addItemHandler} value={this.state.price} name="price" id="price" placeholder="0" />
//                     <Label for="Store">Store</Label>
//                     <Input onChange={this.addItemHandler} value={this.state.store} name="store" id="store" placeholder="Store Name" />
//                     <Label for="Rating Id">Rating: <span className="text-secondary">1 - 5</span></Label>
//                     <Input onChange={this.addItemHandler} value={this.state.ratingId} name="ratingId" id="rating" placeholder="1 - 5" />
//                     <Label for="Category">Category: <span className="text-secondary">1 - 10</span></Label>
//                     <Input onChange={this.addItemHandler} value={this.state.categoryId} name="categoryId" id="category" placeholder="1 - 10" />
//                     <div className="mt-3">
//                         <Button className='btn-success'>Submit</Button>&nbsp;
//                         <Button onClick={() =>{this.setState({AddmodalOpen: false})}}>Close</Button>
//                     </div>
//                     </Form> 
//                 </ModalBody>
//             </Modal>
//         </React.Fragment>
//     )
//   }
// }

// export default Admin