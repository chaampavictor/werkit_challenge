import React, { Component } from "react";
import axiosInstance from "./axiosApi";

import { Button } from "react-bootstrap";

import "./repo.css";
import { Link } from "react-router-dom";
import SimpleStorage from "react-simple-storage";

import MainWrapper from "./mainwrapper";
import Cookies from "js-cookie";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      isLoading: true,
      errors: null,

      keyword: "",

      newItem: "",
      list: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // this code is for local storage

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  repoDetails(value) {
    Cookies.set(`repodata`, {
      name: value.name,
      full_name: value.full_name,
      default_branch: value.default_branch,
      score: value.score,
      ssh_url: value.ssh_url,
      stargazers_count: value.stargazers_count,
      size: value.size,
      language: value.language,
    });
    console.log("testing", value);
  }

  addSelect(value) {
    console.log("value from repo", value);

    const list = [...this.state.list];
    list.push(value);

    this.setState({
      list,
      value: "",
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  // the code for local storage ends here

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit() {
    try {
      const response = await axiosInstance.get(
        `https://api.github.com/search/repositories?q=${this.state.keyword}/`
      );

      this.setState({
        repositories: response.data.items,

        isLoading: false,
      });

      this.handleModalShowHide();

      return response;
    } catch (error) {
      console.log(error.stack);
      this.setState({
        errors: error.response,
      });
    }
  }

  render() {
    const { isLoading, repositories, from, to } = this.state;
    // const repodata = JSON.parse(Cookies.get("repo"));
    return (
      <React.Fragment>
        <SimpleStorage parent={this} />
        <MainWrapper className="explore-body">
          <br />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              className="form-control"
              placeholder="Enter Name"
              type="text"
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleChange}
              onBlur={this.handleChange}
              style={{
                border: "2px solid #32c709",
                width: "30%",
                borderRadius: "12px",
                height: "40px",
                padding: "0px 0px 0px 10px ",
                backgroundColor: "none",
                margin: "0px 2px 0px 0px ",
                fontSize: 14,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                color: "white",
                variant: "contained",
                size: "small",
                backgroundColor: "#29BD00",
                margin: "0px 1px 0px 0px ",
                fontSize: 28,
                height: "40px",
                fontWeight: "",
                textTransform: "none",
                textAlign: "center",
                border: "1px solid #29BD00",
                borderRadius: "100px 100px 100px 100px",
                padding: "5px 3px ",
                width: "15%",
                boxShadow: "0px 3px 3px #E2E2E2",
                "&:hover": {
                  backgroundColor: "#29BD00",
                },
              }}
              onClick={() => this.handleSubmit()}
            >
              Search
            </Button>
          </div>
          <br />
          <br />

          <div
            className="explore-card-columns  container-fluid"
            style={{ marginBottom: "100px" }}
          >
            {repositories.map((repo, i) => (
              <div
                className="card"
                key={repo.id}
                style={{ background: "#8080801f" }}
              >
                <div className="explore-user-detail">
                  <span
                    style={{
                      color: "#32c709",
                      fontWeight: "bolder",
                      fontSize: "15px",
                    }}
                  >
                    {repo.full_name}
                  </span>
                </div>

                <div className={"card-body"}>
                  <h6>
                    Default Branch:
                    <br />
                    <span>{repo.default_branch}</span>
                  </h6>

                  <h6>
                    Decription:
                    <br />
                    <span>{repo.description}</span>
                  </h6>

                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{
                        background: "#32c709",
                        height: "32px",
                      }}
                      key={i}
                      ref="itemValue"
                      value={repo}
                      onClick={this.addSelect.bind(this, repo)}
                    >
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "white",
                          fontSize: "11px",
                        }}
                      >
                        Add to Select
                      </span>
                    </Button>

                    <Button
                      style={{
                        background: "#32c709",
                        height: "32px",
                        marginLeft: "6px",
                      }}
                      key={i}
                      ref="itemValue"
                      value={repo}
                      onClick={this.repoDetails.bind(this, repo)}
                    >
                      <Link
                        to="/details"
                        type="submit"
                        value="submit"
                        style={{ textDecoration: "none", borderColor: "red" }}
                      >
                        <span
                          style={{
                            fontWeight: "bolder",
                            color: "white",
                            fontSize: "11px",
                          }}
                        >
                          View Details
                        </span>
                      </Link>
                    </Button>

                    {/* <Button
                      style={{
                        background: "#32c709",
                        height: "32px",
                        marginLeft: "6px",
                      }}
                      key={i}
                      ref="itemValue"
                      value={repo}
                      onClick={this.addSelect.bind(this, repo)}
                    >
                      <span
                        style={{
                          fontWeight: "bolder",
                          color: "white",
                          fontSize: "11px",
                        }}
                      >
                        View Details
                      </span>
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MainWrapper>
      </React.Fragment>
    );
  }
}

export default Home;
