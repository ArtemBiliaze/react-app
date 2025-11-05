import { Component } from "react"; 

class Counter extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    //*початковий стан
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    //* setState(зміна стану) => перерендер сторінки
    this.setState({ count: this.state.count + 1 });
  };

  dicrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.dicrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
