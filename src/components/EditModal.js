import React, {useState, useEffect} from 'react'
import Swal from 'sweetalert2'
import {default as axios} from 'axios';
import qs from 'querystring'
import { Button, Modal,
    ModalHeader, ModalBody,
    Form, Input, Label, DropdownToggle,
    Dropdown, DropdownMenu, DropdownItem

} from 'reactstrap';

const EditModal = (props) =>{
    let {
        detailId, 
        isOpen,
        onClose
    } = props

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    // console.log(detailId)
    
    const [name, setName] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [price, setPrice] = useState([]);
    const [description, setDescription] = useState([]);
    const [condition_id, setConditionId] = useState(0);
    const [conditionActive, setConditionActive] = useState('');
    const [conditions, setConditions] = useState([]);
    const [conds, setConds] = useState(0);
    const [curentCondition, setCurentCondition] = useState('');
    const [category_list, setCategory_list] = useState([]);
    const [category_id, setCategoryId] = useState(0);
    const [category, setCategory] = useState(0);
    const [rating_id, setRatingId] = useState([]);
    const [rating, setRating] = useState(0)
    const [productRating, setProductRating] = useState([]);
    const [ratingActive, setRatingActive] = useState(0);
    const [curentRating, setCurentRating] = useState(0)
    const [categoryActive, setCategoryActive] = useState('');
    const [currentCategory, setCurrentCategory] = useState('');
    const [modalOpen, setModalOpen] = useState(isOpen);
    
    var mp = ''


    // modal
    useEffect(() => {
      if (isOpen === true){
          setModalOpen(isOpen)
      } else {
          setModalOpen(false)
      }
    }, [isOpen]);


    useEffect(() => {
        setTimeout(() => {
          const fetchModal = async () => {
            
            const {data} = await axios.get(`http://localhost:8080/manage/product/${detailId}`);
            
            setName(data.data[0].name);
            setQuantity(data.data[0].quantity);
            setPrice(data.data[0].price);
            setDescription(data.data[0].description);
            setConds(data.data[0].condition_id);
            setConditionId(data.data[0].condition_id);
            setCategory(data.data[0].category_id);
            setCategoryId(data.data[0].category_id);
            setRating(data.data[0].rating_id);
          };
          fetchModal();
        })
      }, [detailId]);


      /* -------------------------------------------------------------------------- */
      useEffect(() => {
          const fetchCategory = async () => {
            const {data} = await axios.get(`http://localhost:8080/manage/category/`);
            let category = data.results
            setCategory_list(category)
          };
          fetchCategory();
      /* -------------------------------------------------------------------------- */

        const selectCategory = async () => {
          const {data} = await axios.get(`http://localhost:8080/manage/category/${Number(category)}`);
          mp = data.data[0].category_name
          setCategoryActive(mp)
          setCategoryId(data.data[0].id)
          setCurrentCategory(mp)
        };
        selectCategory()
      }, [category])
      /* -------------------------------------------------------------------------- */


       useEffect(() => {
        const conditions = async () => {
          const {data} = await axios.get(`http://localhost:8080/manage/condition/`)
          // console.log(data.results)
          setConditions(data.results)
        }
        conditions()
      /* -------------------------------------------------------------------------- */

        const selectCondition = async () => {
          const {data} = await axios.get(`http://localhost:8080/manage/condition/${Number(conds)}`)
          // console.log(data.data[0].condition_name)
          // console.log(condition_id)
          let condName = data.data[0].condition_name
          setConditionActive(condName)
          setCurentCondition(condName)
        }
        selectCondition()
       },[conds])
      /* -------------------------------------------------------------------------- */

      useEffect(() => {
        const rating = async () => {
          const {data} = await axios.get(`http://localhost:8080/manage/rating/`)
          // console.log(data.data[0].condition_name)
          // console.log(condition_id)
          let prodRating = data.results
          setProductRating(prodRating)
          setCurentRating(prodRating)
          // console.log(prodRating)
        }
        rating()
      }, [])
      /* -------------------------------------------------------------------------- */

      useEffect(() => {
        const selectRating = async () => {
          const {data} = await axios.get(`http://localhost:8080/manage/rating/${Number(rating)}`)
          // console.log(data.data[0].condition_name)
          // console.log(condition_id)
          let prodRating = data.data[0].rating
          setCurentRating(prodRating)
          setRatingActive(prodRating)
          console.log(data)
          console.log(rating)
        }
        selectRating()
      }, [rating])

    /* -------------------------------------------------------------------------- */
   const editformSubmit = async (e)=> {
    e.preventDefault()
        // category_id=category
        e.preventDefault()
        let edit = qs.stringify({name, quantity, price, description, condition_id, category_id, rating_id})
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {
                axios.patch(`http://localhost:8080/manage/product/${detailId}`, edit)
              Swal.fire('Saved!', '', 'success')
              onClose()
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          }
        )
    }

    return (
        <React.Fragment>
          {/* {console.log(category_id)} */}
            <Modal isOpen={modalOpen}>
                <ModalHeader>
                    <span>Edit Item</span>
                </ModalHeader>
                <ModalBody>
                <Form onSubmit={editformSubmit}>
                    <Label for="Name">Name Product</Label>
                    <Input name="name" onChange={(e)=>{setName(e.target.value)}} value={name}/>

                    <Label for="Quantity">Quantity Product</Label>
                    <Input name="quantity" onChange={(e)=>{setQuantity(e.target.value)}} value={quantity}/>

                    <Label for="Price">Price</Label>
                    <Input onChange={(e)=>{setPrice(e.target.value)}} value={price} name="price" id="price"/>

                    <Label for="Description">Description</Label>
                    <Input onChange={(e)=>{setDescription(e.target.value)}} value={description} name="description" id="description"/>
                    
                    <Label for="Condition">Condition</Label>
                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                    <DropdownToggle className="bg-white text-dark w-100 d-flex justify-content-between align-items-center" caret>
                      {conditionActive}
                    </DropdownToggle>
                    <DropdownMenu
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  overflow: 'auto',
                                  maxHeight: '100px',
                                },
                              };
                            },
                          },
                        }}
                        className="w-100"
                      >
                      <DropdownItem className='disabled'>Select Condition</DropdownItem>
                      <DropdownItem className='custom_dropdown disabled'></DropdownItem>
                      {Object.keys(conditions).length && conditions.map((items, index) => {
                        // console.log('ini ' + category + ' sama dengan ' + index)
                        // console.log(condition_id)
                        return (
                          conditionActive === items.condition_name  ? <DropdownItem active  onClick={()=>{setConditionId(items.id); setConditionActive(items.condition_name)}}>{items.condition_name}</DropdownItem> : <DropdownItem  onClick={()=>{setConditionId(items.id); setConditionActive(items.condition_name)}}>{items.condition_name}</DropdownItem>
                        )
                      })}           
                      </DropdownMenu>
                  </Dropdown>
                    
                    <Label for="Category">Category</Label>
                    {/* <Input onChange={(e)=>{setCategory(e.target.value)}} value={category_id} name="category" id="category"/> */}
                    
                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className="bg-white text-dark w-100 d-flex justify-content-between align-items-center" caret>
                      {categoryActive}
                    </DropdownToggle>
                    <DropdownMenu
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  overflow: 'auto',
                                  maxHeight: '200px',
                                },
                              };
                            },
                          },
                        }}
                        className="w-100"
                      >
                      <DropdownItem className='disabled'>Select Category</DropdownItem>
                      <DropdownItem className='custom_dropdown disabled'></DropdownItem>
                      {Object.keys(category_list).length && category_list.map(items => {
                        return (
                          categoryActive === items.category_name  ? <DropdownItem active  onClick={()=>{setCategoryId(items.id); setCategoryActive(items.category_name)}}>{items.category_name}</DropdownItem> : <DropdownItem  onClick={()=>{setCategoryId(items.id); setCategoryActive(items.category_name)}}>{items.category_name}</DropdownItem>
                        )
                      })}           
                      </DropdownMenu>
                    </Dropdown>
                    
                    <Label for="Rating">Rating</Label>
                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                    <DropdownToggle className="bg-white text-dark w-100 d-flex justify-content-between align-items-center" caret>
                      {ratingActive}
                    </DropdownToggle>
                    <DropdownMenu
                        modifiers={{
                          setMaxHeight: {
                            enabled: true,
                            order: 890,
                            fn: (data) => {
                              return {
                                ...data,
                                styles: {
                                  ...data.styles,
                                  overflow: 'auto',
                                  maxHeight: '200px',
                                },
                              };
                            },
                          },
                        }}
                        className="w-100"
                      >
                      <DropdownItem className='disabled'>Select Rating</DropdownItem>
                      <DropdownItem className='custom_dropdown disabled'></DropdownItem>
                      {Object.keys(productRating).length && productRating.map((items, index) => {
                        return (
                          index === 0  ? <DropdownItem active  onClick={()=>{setRatingId(items.id); setRatingActive(items.rating)}}>{items.rating}</DropdownItem> : <DropdownItem  onClick={()=>{setRatingId(items.id); setRatingActive(items.rating)}}>{items.rating}
                          </DropdownItem>
                        )
                      })}           
                      </DropdownMenu>
                  </Dropdown>
                    
                    <div className="mt-3 d-flex justify-content-center">
                    <Button className='btn-success'>Submit</Button>&nbsp;
                    <Button onClick={()=>{onClose(); setCategoryActive(currentCategory); setConditionActive(curentCondition); setRatingActive(curentRating)}}>Close</Button>
                    </div>
                </Form>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}

export default EditModal
