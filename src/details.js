import React, { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";

import { Row, Container } from "react-bootstrap";

import Cookies from "js-cookie";
// import Success from "../loadfunds/success";

const Details = (props) => {
  const repo = JSON.parse(Cookies.get("repodata"));
  console.log("testing", repo);
  return (
    <React.Fragment>
      <div>
        <br />
        <br />
        <br />
        <h1>Repository Details</h1>

        <h4>Repo Name:</h4>
        <h3>{repo.full_name}</h3>

        <br />
        <h4>Name:</h4>
        <h3>{repo.name}</h3>

        <br />
        <h4>Default Branch:</h4>
        <h3>{repo.default_branch}</h3>

        <br />

        <h4>SSH URL:</h4>

        <h3>{repo.ssh_url}</h3>

        <br />

        <h4>Stargazers Count:</h4>

        <h3>{repo.stargazers_count}</h3>
        <br />
        <h4>Size:</h4>
        <h3>{repo.size}</h3>

        <br />
        <h4>Language:</h4>
        <h3>{repo.language}</h3>
      </div>
    </React.Fragment>
  );
};

export default Details;
