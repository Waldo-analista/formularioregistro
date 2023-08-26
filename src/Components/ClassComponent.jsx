import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { contador: 0 };
  }
  render() {
    return (
      <div>
        <p>ClassComponent</p>
        <p>{this.state.contador}</p>
        <span>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador - 1 });
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              this.setState({ contador: this.state.contador + 1 });
            }}
          >
            +
          </button>
        </span>
      </div>
    );
  }
}

export default ClassComponent;
