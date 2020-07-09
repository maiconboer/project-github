import React from 'react';

import api from '../../services/api';

import { Container, Title } from './styles';

const SignIn = () => {

  async function handleLogin(event) {
      // const response = await api.get('/login/github')
      // console.log(response);



      // api.get("/login/github", (request, response) => {
      //   const redirect_uri = "http://localhost:3000/login/github/callback";
      //   response.redirect(
      //     `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
      //   );
      // });

      // async function getAccessToken({ code, client_id, client_secret }) {
      //   const request = await fetch("https://github.com/login/oauth/access_token", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json"
      //     },
      //     body: JSON.stringify({
      //       client_id,
      //       client_secret,
      //       code
      //     })
      //   });
      //   const text = await request.text();
      //   const params = new URLSearchParams(text);
      //   return params.get("access_token");
      // }

      // async function fetchGitHubUser(token) {
      //   const request = await fetch("https://api.github.com/user", {
      //     headers: {
      //       Authorization: "token " + token
      //     }
      //   });
      //   return await request.json();
      // }

      // api.get("/login/github/callback", async (request, response) => {
      //   const code = request.query.code;

      //   const access_token = await getAccessToken({ code, client_id, client_secret });

      //   const user = await fetchGitHubUser(access_token);

      //   if (user) {
      //     request.session.access_token = access_token;
      //     request.session.data = user;
      //     response.redirect("/admin")
      //   } else {
      //     response.send("Login did not succeed!");
      //   }
      // });

      // api.get("/admin", async (request, response) => {

      //   if (request.session) {
      //     response.json(request.session);
      //   } else {
      //     response.redirect("/login/github");
      //   }
      // });

      // api.get("/logout", (request, response) => {

      //   if (request.session) {
      //     request.session = null
      //   };
      //   response.redirect("/");
      // });



























  }

  return (
    <>
      <Container>
        {/* <img src={iconLogo} alt='Gihub' /> */}

        <Title>Github<span className='title-tags'>tags</span></Title>

        <button onClick={handleLogin}>Login com github</button>

      </Container>
    </>
  );
};

export default SignIn;
