import React, { useContext, useState } from 'react';

import api from '../../services/api';
import apiDB from '../../services/apiDB';

import { AuthContext } from "../../App";
import Header from '../../components/Header';
import { Wrapper } from './styles';
import { useEffect } from 'react';

const StarredRepositories = () => {

  const {state, dispatch} = useContext(AuthContext);
  const [starredRepositories, setStarredRepositories] = useState([])
  
  useEffect(() => {
    const user = state.user.login;

    async function loadRepositories() {
      const { data } = await api.get(`users/${user}/starred?page=1&per_page=30`);
      
      setStarredRepositories(data);
    }

    loadRepositories();
  }, [state.user.login])

  async function handleAddTag(event) { 
    let user_id = String(state.user.id);
    let repo_id = event.target.parentNode.parentNode.id;
    let tags = prompt(`insert tag name`);
    
    if(tags) {
      let data = {
        user_id,
        repo_id,
        tags
      }
      
      // const response = await apiDB.post('/starred-repositories', data)

      let boxTags = document.querySelectorAll(`[data-test]`)

      boxTags = Array.from(boxTags)

      const boxFiltered = boxTags.filter(box => box.dataset.test == repo_id)

      let span = document.createElement('span')

      // span.innerHTML = tags
      span.innerHTML = tags;
      span.dataset.user_id = user_id;
      span.dataset.repo_id = repo_id;
      span.dataset.tags = tags;
      boxFiltered[0].appendChild(span)

      // console.log(response)

    //   span.innerHTML = 'VSCODE';
    //   span.dataset.user_id = 123456;
    //   span.dataset.repo_id = 532154;
    //   span.dataset.tags = 'VSCODE';
      span.onclick = () => handleOpenModal(event)
      // boxTags.appendChild(span)
    }
  }

  async function handleEditTag() {
    
  }

  async function handleRemoveTag() {
    
  }

  function handleOpenModal(event) {

    console.log(event);

    let wrapper = document.querySelector('.wrapper')
    let divModal = document.createElement('div');
    let div = document.createElement('div');
    let input = document.createElement('input');
    let btnEdit = document.createElement('button');
    let btnDelete = document.createElement('button');
    let btnExit = document.createElement('button');
    
    divModal.classList = 'modal-edit-delete';
    input.placeholder = 'Tag name';

    btnEdit.innerHTML = 'Edit';
    btnDelete.onclick = () => handleEditTag();

    btnDelete.innerHTML = 'Delete';
    btnDelete.onclick = () => handleRemoveTag();

    btnExit.innerHTML = 'x';
    btnExit.classList = 'close-modal'
    btnExit.onclick = () => handleCloseModal();

    div.appendChild(input)
    div.appendChild(btnEdit)
    div.appendChild(btnDelete)
    div.appendChild(btnExit)
    divModal.appendChild(div)
    wrapper.appendChild(divModal)
  }

  function handleCloseModal() {
    let modal = document.querySelector('.modal-edit-delete')
    modal.remove();
  }
  
  return (
    <Wrapper className='wrapper'>
      <Header />

      <div className='title-and-seach'>
        <h2 className='title'>Starred Repositories</h2>
        <input 
          type='text'
          name='search'
          placeholder='Search tags'
        />
      </div>
      

      {starredRepositories.map(repository => (
        <div key={repository.id} className='box-repositories' id={repository.id}>
          <p><span>ID:</span> {repository.id}</p>
          <p><span>Name:</span> {repository.name}</p>
          <p><span>Description:</span> {repository.description}</p>
          <p><span>URL:</span> <a href={repository.url} target='_blank'>{repository.url}</a> </p>

          <div className='box-btn-tags'>
            <button onClick={handleAddTag}>add tag</button>
            <div data-test={repository.id} className='box-tags'>
            
            </div>
          </div>
        </div>
      ))}

 
        {/* ABAIXO DADOS ESTÁTICOS */}


        {/* <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>

          <div className='box-btn-tags'>
            <button onClick={handleAddTag}>add tag</button>
            <div className='box-tags'>
            
            </div>
          </div>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 875454564654</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>

          <div className='box-btn-tags'>
            <button onClick={handleAddTag}>add tag</button>
            <div className='box-tags'>
            
            </div>
          </div>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>

          <div className='box-btn-tags'>
            <button onClick={handleAddTag}>add tag</button>
            <div className='box-tags'>
            
            </div>
          </div>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>

          <div className='box-btn-tags'>
            <button onClick={handleAddTag}>add tag</button>
            <div className='box-tags'>
            
            </div>
          </div>
        </div>

        <div className='box-repositories'>
          <p><span>ID:</span> 214568764</p>
          <p><span>Name:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          <p><span>Description:</span> Illum voluptate. Placeat necessitatibus dolores voluptates quia? Quo, maiores iure.</p>
          <p><span>URL:</span> <a href='https://www.google.com.br' target='_blank'>https://www.google.com.br</a> </p>

          <div className='box-btn-tags'>
            <button onClick={handleAddTag}>add tag</button>
            <div className='box-tags'>
            
            </div>
          </div>
        </div>
     

      {/* {console.log(starredRepositories)} */}
      {/* {console.log(state.user.id)} */} 
    </Wrapper>
  )
}

export default StarredRepositories;