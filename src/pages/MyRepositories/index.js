import React, { useContext, useState } from 'react'

import api from '../../services/api'

import { AuthContext } from "../../App";
import Header from '../../components/Header';
import { Wrapper } from './styles'
import { useEffect } from 'react';

const MyRepositories = () => {

  const { state, dispatch } = useContext(AuthContext);
  const [myRepositories, setMyRepositories] = useState([])
  
  // useEffect(() => {
  //   const user = state.user.login

  //   async function loadRepositories() {
  //     const { data } = await api.get(`users/${user}/repos`)

  // `users/${user}/repos?page=2&per_page=30`

  //     setMyRepositories(data)
  //   }

  //   loadRepositories()
  // }, [state.user.login])

  

  return (
    <Wrapper>

      <Header />
   
      <h2 className='title'>My repositories</h2>

      {/* {myRepositories.map(repository => (
        <div key={repository.id} className='box-repositories'>
          <p><span>ID:</span> {repository.id}</p>
          <p><span>Name:</span> {repository.name}</p>
          <p><span>Description:</span> {repository.description}</p>
          <p><span>URL:</span> <a href={repository.url} target='_blank'>{repository.url}</a> </p>
        </div>
      ))} */}


        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>
        </div>
     

      {/* {console.log(myRepositories)} */}
    </Wrapper>
  )
}

export default MyRepositories;