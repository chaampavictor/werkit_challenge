import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SimpleStorage from "react-simple-storage";

export default class Selected extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <br />
        <br />
        <br />

        {/* <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.full_name}
                <button onClick={() => this.deleteItem(item.id)}>Remove</button>
              </li>
            );
          })}
        </ul> */}

        <div
          className="explore-card-columns  container-fluid"
          style={{ marginBottom: "100px" }}
        >
          {this.state.list.map((item) => (
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
                      background: "red",
                      height: "32px",
                    }}
                    key={i}
                    ref="itemValue"
                    value={repo}
                    onClick={() => this.deleteItem(item.id)}
                  >
                    <span
                      style={{
                        fontWeight: "bolder",
                        color: "white",
                        fontSize: "11px",
                      }}
                    >
                      Remove Repository
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
