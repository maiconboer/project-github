import React, { useContext, useState } from 'react'

import api from '../../services/api'

import { AuthContext } from "../../App";
import Header from '../../components/Header';
import { Wrapper } from './styles'
import { useEffect } from 'react';

const StarredRepositories = () => {

  const { state, dispatch } = useContext(AuthContext);
  const [starredRepositories, setStarredRepositories] = useState([])
  
  // useEffect(() => {
  //   const user = state.user.login

  //   async function loadRepositories() {
  //     const { data } = await api.get(`users/${user}/starred?page=1&per_page=30`)
      
  //     setStarredRepositories(data)
  //   }

  //   // `users/diego3g/starred?page=2&per_page=30`

  //   loadRepositories()
  // }, [state.user.login])

  

  return (
    <Wrapper>

      <Header />
   
      <h2 className='title'>Starred Repositories</h2>

      {starredRepositories.map(repository => (
        <div key={repository.id} className='box-repositories'>
          <p><span>ID:</span> {repository.id}</p>
          <p><span>Name:</span> {repository.name}</p>
          <p><span>Description:</span> {repository.description}</p>
          <p><span>URL:</span> <a href={repository.url} target='_blank'>{repository.url}</a> </p>
        </div>
      ))}


        {/* <div className='box-repositories'>
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
        </div> */}
     

      {console.log(starredRepositories)}
    </Wrapper>
  )
}

export default StarredRepositories;