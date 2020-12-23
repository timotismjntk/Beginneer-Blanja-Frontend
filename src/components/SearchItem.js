/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {Container} from 'reactstrap'
import axios from 'axios';
// import './App.css';
import Posts from './ShowItem';
import Paginations from './Pagination';
import qs from 'querystring'

import { Button } from 'reactstrap';
// let input = location.search;
const {REACT_APP_BACKEND_URL} = process.env

const SearchItem = ({search, sortBy, setTempOrderBy, limit}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage, setPostsPerPage] = useState(10);
  const [sortingBy, setSortingBy] = useState('')
  const [orderingBy, setOrderingBy] = useState(setTempOrderBy)
  // eslint-disable-next-line no-restricted-globals
  const [querySearch, setQuerySearch] = useState(location.search)
  const hasil = search

  // // let input = ''
  // console.log(sortBy)
  // console.log(orderBy)
  // console.log(querySearch.slice(1, querySearch.length))

  useEffect(() => {
    // alert(limit)
    setPostsPerPage(limit)
    sortBy === 'Ascending' ? setSortingBy('ASC') : setSortingBy('DESC')
  }, [sortBy, limit])

  useEffect(() => {
    if (hasil.length === 0) {
      const fetchPosts = async () => {
        setLoading(true);
        hasil.length > 0 && setQuerySearch('')
        const res = await axios.get(`${REACT_APP_BACKEND_URL}public?limit=40&orderBy[${setTempOrderBy === 'New' ? 'created_at' : setTempOrderBy }]=${sortingBy}`);
        if(res.status === 200){
          setPosts(res.data.results);
        }
      };
      fetchPosts();
    } else {
      const fetchPosts = async () => {
        setLoading(true);
        hasil.length > 0 && setQuerySearch('')
        const res = await axios.get(`${REACT_APP_BACKEND_URL}public?${!querySearch ? qs.stringify({search:hasil}) + `&orderBy[${setTempOrderBy}]=${sortingBy}` : querySearch.slice(1, querySearch.length)}`);
        if(res.status === 200){
          setPosts(res.data.results);
        }
      };
      fetchPosts();
    }
  }, [hasil, querySearch, setTempOrderBy, sortingBy])

  console.log(posts)
  // useEffect(() => {
  //   setTimeout(() => {
  //     const fetchPosts = async () => {
  //       setLoading(true);
  //       hasil.length > 0 && setQuerySearch('')
  //       const res = await axios.get(`${REACT_APP_BACKEND_URL}public?${!querySearch ? qs.stringify({search:hasil}) + `&orderBy[${setTempOrderBy}]=${sortingBy}` : querySearch.slice(1, querySearch.length)}`);
  //       if(res.status === 200){
  //         setPosts(res.data.results);
  //       }
  //     };
  //     fetchPosts();
  //   }, 1000)
  // }, [hasil, querySearch, setTempOrderBy, sortingBy]);

  // Get current posts

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const results = posts.length
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(results)
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
      <React.Fragment>
        <Container className='mt-5'>
        <Posts posts={currentPosts} loading={loading} result={results} currentPage={currentPage} postsPerPage={PostsPerPage} isSearch={hasil} isQuerySearch={querySearch}/>
        <div className="d-flex justify-content-center mt-5">
            <Paginations
                postsPerPage={PostsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
                // isSearch={hasil}
            />
        </div>
        </Container>
      </React.Fragment>
  );
};

export default SearchItem;