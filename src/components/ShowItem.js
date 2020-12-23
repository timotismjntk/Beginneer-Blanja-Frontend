import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

import { Table, Button } from 'reactstrap';
import ShowModal from './ShowModal';
import EditItemModal from './EditModal';
const {REACT_APP_BACKEND_URL} = process.env

const Posts = ({ posts, loading, result, currentPage, postsPerPage, isSearch, isQuerySearch }) => {
    const [detail, setDetail] = useState({});
    const [detailId, setDetailId] = useState();
    let [modalOpen, setModalOpen] = useState(false);
    let [editModalOpen, setEditModalOpen] = useState(false);
    let pencarian = isQuerySearch.slice(8, isQuerySearch.length)  // untuk menampilkan nama barang yang dicari jika tidak ditemukan

    // const handleAddClick = () => {
    //     setModalOpen(true);
    //   };
      // const handleClose = ()=>{
      //   setEditModalOpen(true)
      // }
    useEffect(() => {
        if (detailId) {
          const fetchModal = async () => {
            // history.push(`?${qs.stringify(hasil)}`)
            const res = await axios.get(`${REACT_APP_BACKEND_URL}public/product/${detailId}`);
            if(res.status === 200){
                setDetail(res.data.data);
            }
            console.log(res)
          };
          fetchModal();
        }
      }, [detailId]);
      console.log(detailId)


//   if (loading) {
//     return <h2>Loading...</h2>;
//   }
  const numberItem = [];
  for (var i = 1; i <= result; i++) {
    numberItem.push(i);
  }
  

  const deleteItem = async (id)=> {
    Swal.fire({
      title: 'Do you want to delete the product?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: `Delete`,
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
          // console.log(detailId)
          axios.delete(`${REACT_APP_BACKEND_URL}manage/product/${id}`)
        Swal.fire('Delete!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Product is not delete', '', 'info')
      }
    }
    )
    }
  return (
    <React.Fragment>
        <Table className={`table table-hover ${posts.length === 0 ? 'table' : 'table-responsive'}`}>
            <thead className="thead-dark">
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Condition</th>
                    <th>Category</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {loading ? null : <h4 className='mt-3'>Loading...</h4>}
              
                { 
                Object.keys(posts).length && posts.map((item, index) => {
                    var change = 0
                    change = (postsPerPage*currentPage) - (postsPerPage-1)  // logic untuk membuat numbering pada table
                    // console.log(currentPage * index)
                    if(currentPage===1){
                        change = 1
                    }
                    // while()
                return(
                    <React.Fragment>
                        <tr key={ index }>
                            <th scope="row">{index+change}</th>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}}>{item.name}</td>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}}>{item.quantity}</td>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}}>{item.price}</td>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}} className="w-50">{item.description}</td>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}}>{item.condition_name}</td>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}}>{item.category_name}</td>
                            <td onClick={()=>{setModalOpen(true); setDetailId(item.id)}}>{item.total_rating}</td>
                            <td>
                                <Button color="warning" className='w-100' onClick={()=>{setEditModalOpen(true); setDetailId(item.id)}}>Edit</Button>&nbsp;
                                <Button color="danger" className='w-100' onClick={()=>{deleteItem(item.id)}}> Delete</Button>
                            </td>
                        </tr>
                    </React.Fragment>
                        )
                    })
                    }
            </tbody>
        </Table>
        <div>
          {((posts.length === 0 && isSearch.length > 0) && !isQuerySearch) ? <h5 className={`mb-5 text-secondary w-100`}>Hasil pencarian Anda untuk <strong>{isSearch}</strong>: tidak cocok dengan apapun.....</h5> : null}
          {(loading && isQuerySearch.length > 0 && (!isSearch || posts.length === 0)) ? <h5 className={`mb-5 text-secondary w-100`}>Hasil pencarian Anda untuk <strong>{pencarian}</strong>: tidak cocok dengan apapun.....</h5> : null}
        </div>
        <ShowModal detail={detail} isOpen={modalOpen} onClose={() => setModalOpen(false)} />  {/* pass value from parent to child*/}
        <EditItemModal detailId={detailId} isOpen={editModalOpen} onClose={() => setEditModalOpen(false)}/>  
    </React.Fragment>
  );
};

export default Posts;