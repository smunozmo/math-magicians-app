import React from 'react';
// import operate from './operate';
import calculate from './calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  UpdateObj = (event) => {
    const newState = calculate(this.state, event.target.value);
    this.setState(newState);
    const displayTotal = document.querySelector('form');
    if (newState.next !== null) {
      displayTotal.innerText = newState.next;
    } else {
      displayTotal.innerText = newState.total;
    }
  }

  render() {
    return (
      <div className="App">
        <table>
          <td>
            <form type="text" value="0" className="display">0</form>
            <br />
            <button type="button" value="AC" onClick={this.UpdateObj}>AC</button>
            <button type="button" value="+" onClick={this.UpdateObj}>+/-</button>
            <button type="button" value="%" onClick={this.UpdateObj}>%</button>
            <button type="button" value="÷" className="orange" onClick={this.UpdateObj}>÷</button>
            <br />
            <button type="button" value="7" onClick={this.UpdateObj}>7</button>
            <button type="button" value="8" onClick={this.UpdateObj}>8</button>
            <button type="button" value="9" onClick={this.UpdateObj}>9</button>
            <button type="button" value="x" onClick={this.UpdateObj} className="orange">x</button>
            <br />
            <button type="button" value="4" onClick={this.UpdateObj}>4</button>
            <button type="button" value="5" onClick={this.UpdateObj}>5</button>
            <button type="button" value="6" onClick={this.UpdateObj}>6</button>
            <button type="button" value="-" onClick={this.UpdateObj} className="orange">-</button>
            <br />
            <button type="button" value="1" onClick={this.UpdateObj}>1</button>
            <button type="button" value="2" onClick={this.UpdateObj}>2</button>
            <button type="button" value="3" onClick={this.UpdateObj}>3</button>
            <button type="button" value="+" onClick={this.UpdateObj} className="orange">+</button>
            <br />
            <button type="button" value="0" onClick={this.UpdateObj} className="zero">0</button>
            <button type="button" value="." onClick={this.UpdateObj}>.</button>
            <button type="button" value="=" onClick={this.UpdateObj} className="orange">=</button>
            <br />
          </td>
        </table>
      </div>
    );
  }
}
export default Calculator;
