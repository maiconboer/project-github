import express from "express";
import cors from 'cors';
import fetch from "node-fetch";
import cookieSession from "cookie-session";

const app = express();
app.use(cors());
app.use(
  cookieSession({
    secret: process.env.COOKIE_SECRET
  })
);

const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
console.log({ client_id, client_secret });

app.get("/", (request, response) => {
  response.send("Hello GitHub auth");
});

app.get("/login/github", (request, response) => {
  const redirect_uri = "http://localhost:9000/login/github/callback";
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
  );
});

async function getAccessToken({ code, client_id, client_secret }) {
  const request = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  });
  const text = await request.text();
  const params = new URLSearchParams(text);
  return params.get("access_token");
}

async function fetchGitHubUser(token) {
  const request = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: "token " + token
    }
  });
  return await request.json();
}

app.get("/login/github/callback", async (request, response) => {
  const code = request.query.code;

  const access_token = await getAccessToken({ code, client_id, client_secret });

  const user = await fetchGitHubUser(access_token);

  if (user) {
    request.session.access_token = access_token;
    request.session.data = user;
    response.redirect("/admin")
  } else {
    response.send("Login did not succeed!");
  }
});

app.get("/admin", async (request, response) => {
  
  if (request.session) {
    response.json(request.session);
  } else {
    response.redirect("/login/github");
  }
});

app.get("/logout", (request, response) => {
  
  if (request.session) { 
    request.session = null 
  };
  response.redirect("/");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("Listening on localhost:" + PORT));
