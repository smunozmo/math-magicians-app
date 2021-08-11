import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <table>
          <td>
            <input type="text" name="input" value="0" className="display" />
            <br />
            <input type="button" name="clear" value="c" />
            <input type="button" name="sign" value="+/-" />
            <input type="button" name="percent" value="%" />
            <input type="button" name="divided" value="/" className="orange" />
            <br />
            <input type="button" name="seven" value="7" />
            <input type="button" name="eight" value="8" />
            <input type="button" name="nine" value="9" />
            <input type="button" name="times" value="x" className="orange" />
            <br />
            <input type="button" name="four" value="4" />
            <input type="button" name="five" value="5" />
            <input type="button" name="six" value="6" />
            <input type="button" name="minus" value="-" className="orange" />
            <br />
            <input type="button" name="one" value="1" />
            <input type="button" name="two" value="2" />
            <input type="button" name="three" value="3" />
            <input type="button" name="plus" value="+" className="orange" />
            <br />
            <input type="button" name="zero" value="0" className="zero" />
            <input type="button" name="dot" value="." />
            <input type="button" name="equals" value="=" className="orange" />
            <br />
          </td>
        </table>
      </div>

    );
  }
}

export default Calculator;
