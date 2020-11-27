import React, { Component } from "react";

class MainWrapper extends Component {
  render() {
    const { className, children } = this.props;

    // let main = width === 198 ? `main` : `main main-collapse`

    return (
      <div className={`main content w-auto py-6 ${className}`}>{children}</div>
    );
  }
}

export default MainWrapper;
