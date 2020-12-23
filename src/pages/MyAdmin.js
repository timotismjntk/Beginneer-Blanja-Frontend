import React, { useState } from 'react';
import '../App.css';
import '../assets/css/style.css';
import { Button, Jumbotron, 
    Container, Form, Input, Dropdown,
    DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import SearchItem from '../components/SearchItem'
import NavbarSeller from '../components/NavbarSeller'
import CreateItemModal from '../components/CreateModal';
// import Clear from '../assets/images/Clear.svg'
import qs from 'querystring'

const MyAdmin = () => {
    const [search, setSearch] = useState([])
    let [addModal, setAddModal] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [tempOrderBy, setTempOrderBy] = useState('');
    const [tempSortBy, setTempSortBy] = useState('');
    const [orderBy, setOrderBy] = useState('SortBy');
    let [sortBy, setSortBy] = useState('Descending');
    const [limit, setLimit] = useState(10);

    const toggle = () => setDropdownOpen(prevState => !prevState);
    const toggle2 = () => setDropdownOpen2(prevState => !prevState);
    const toggle3 = () => setDropdownOpen3(prevState => !prevState);

    // console.log((sortBy))

    const sortingHandler = () => {
        if(tempOrderBy.length !== 0 || tempSortBy.length !== 0) {
            if(tempOrderBy.length !== 0) {
                setOrderBy(tempOrderBy)
                // alert(tempOrderBy)
            } else if (tempSortBy.length !== 0) {
                setSortBy(tempSortBy)
            }
            if(tempOrderBy.length !== 0 && tempSortBy.length !== 0){
                setOrderBy(tempOrderBy)
                setSortBy(tempSortBy)
            }
        }
        // alert(orderBy)
        // alert(sortBy)
    }
    // if(search.length===)
return(
    <React.Fragment>
        <NavbarSeller />
        <Container className="mt-5 mb-5 rounded">
            <Jumbotron>
                <h1 className="font-weight-bold">
                    List of Product
                </h1>
            </Jumbotron>
            
            <div className="d-flex justify-content-between align-items-center">
                <Form className="form-group d-flex align-items-center w-100">
                    <Input onChange={(e) => {
                    e.preventDefault()
                    setSearch(e.target.value)}} className="searchBar w-50 rounded searchbar" name="search" value={search} placeholder="Search product here..." autoComplete='off'/>
                    {search.length !== 0 ? <Button onClick={()=>{setSearch([]); setSortBy([])}} className="search-icon" close /> : null}
                </Form>
            </div>
            
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-center align-items-center'>
                    <span>Show</span>
                    <Dropdown isOpen={dropdownOpen3} toggle={toggle3} className='mr-2 ml-2'>
                    <DropdownToggle caret className='sorting bg-light d-flex justify-content-around align-items-center h-25 text-dark pr-3'>
                    <h5 className='ml-1 mt-1'>{limit}</h5>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => setLimit(10)}>10</DropdownItem>
                        <DropdownItem onClick={() => setLimit(25)}>25</DropdownItem>
                        <DropdownItem onClick={() => setLimit(50)}>50</DropdownItem>
                        <DropdownItem onClick={() => setLimit(100)}>100</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
                    <span>entries</span>
                </div>
                <div>
                    <Button className='text-sm-center text-wrap mr-1' size='md' color="primary" onClick={()=>{setAddModal(true)}}>
                        Add Product
                    </Button>
                </div>
                <div className="d-flex justify-content-end">
                    <div>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret className='sorting bg-light text-dark mr-1'>
                                {tempOrderBy.length === 0 ? orderBy : tempOrderBy}
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>Sort By</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('New')}>New</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('Name')}>Name</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('Quantity')}>Quantity</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('Price')}>Price</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('condition_id')}>condition_id</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('category_id')}>category_id</DropdownItem>
                                <DropdownItem onClick={() => setTempOrderBy('rating_id')}>rating_id</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>

                    <div>
                        <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                        <DropdownToggle caret className='sorting bg-light text-dark'>
                            {tempSortBy.length === 0 ? sortBy : tempSortBy}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => setTempSortBy('Ascending')}>Ascending</DropdownItem>
                            <DropdownItem onClick={() => setTempSortBy('Descending')}>Descending</DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                    </div>
                    <Button className='sorting2 btn-sm btn-info ml-2' onClick={sortingHandler}>Go</Button>
                    
                </div>
            </div>
        </Container>
                <SearchItem search={search} sortBy={sortBy} setTempOrderBy={orderBy === 'SortBy' ? 'created_at' : orderBy} limit={limit}/>
                <CreateItemModal isOpen={addModal} onClose={() => setAddModal(false)}/> 
    </React.Fragment>
)
}


export default MyAdmin