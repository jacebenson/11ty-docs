require('dotenv').config()
const fetch = require("node-fetch");

module.exports = async function() {
  console.log( "Fetching new github stargazers count…" );
  if(process.env.dev){
    return "9000+"
  } else {//if not in dev mode make call
  // GitHub API: https://developer.github.com/v3/repos/#get
  return fetch("https://api.github.com/repos/redwoodjs/redwood")
    .then(res => res.json()) // node-fetch option to transform to json
    .then(json => {
      // prune the data to return only what we want
      return json?.stargazers_count;
    });
  }
};