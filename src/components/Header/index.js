import React, { useContext } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../App";

import { FiLogOut, FiArrowLeft } from 'react-icons/fi'
import { Wrapper } from './styles'

export default function Home() {

  const { state, dispatch } = useContext(AuthContext);
  // const [ myRepositories, setMyRepositories ] = useState([])

  const history = useHistory();

  if (!state.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const {   
    avatar_url, 
    name, 
    bio,
    public_repos, 
    followers, 
    following, 
    } = state.user

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  } 

  const handleBackHome = () => {
    history.push('/')
  } 

  return (
    <Wrapper>
      <div className="container">

        <div className='box-btns-back-logout'>
          <FiArrowLeft onClick={handleBackHome} title='Home'/>
          <FiLogOut onClick={handleLogout} title='Logout'/>
        </div>
        
        <div>

          <div className="content">
            <div className="box-avatar">
              <img src={avatar_url} alt="avatar" />
              <span>{name}</span>
              <span>{bio}</span>
            </div>

            <div className="box-infomations">
              <span>{public_repos} Repositories</span>
              <span>{followers} Followers</span>
              <span>{following} Following</span>
    
            </div>

            <div>dados</div>
            <div>dados</div>

            <div className="box-links">
              
              <Link to='/repositories'>
                My repositories
              </Link>

              <Link to='/starred-repositories'>
                Starred repositories
              </Link>
              
            </div>      
          </div>
 
        </div>
      </div>
    </Wrapper>
  );
}
