import React, { useState } from 'react';
import calculate from './calculate';

export default function Calculator() {
  const [calcObj, calcObjUpdate] = useState({ total: null, next: null, operation: null });

  const UpdateObj = (event) => {
    const currentObj = calculate(calcObj, event.target.value);
    const displayTotal = document.querySelector('form');
    if (currentObj.next !== null) {
      displayTotal.innerText = currentObj.next;
    } else {
      displayTotal.innerText = currentObj.total;
    }

    if (currentObj.total === undefined) {
      currentObj.total = calcObj.total;
    }
    if (currentObj.next === undefined) {
      currentObj.next = calcObj.next;
    }
    if (currentObj.operation === undefined) {
      currentObj.operation = calcObj.operation;
    }

    calcObjUpdate(currentObj);
  };

  return (
    <div className="App">
      <table>
        <td>
          <form type="text" value="0" className="display">0</form>
          <br />
          <button type="button" value="AC" onClick={UpdateObj}>AC</button>
          <button type="button" value="+" onClick={UpdateObj}>+/-</button>
          <button type="button" value="%" onClick={UpdateObj}>%</button>
          <button type="button" value="÷" className="orange" onClick={UpdateObj}>÷</button>
          <br />
          <button type="button" value="7" onClick={UpdateObj}>7</button>
          <button type="button" value="8" onClick={UpdateObj}>8</button>
          <button type="button" value="9" onClick={UpdateObj}>9</button>
          <button type="button" value="x" onClick={UpdateObj} className="orange">x</button>
          <br />
          <button type="button" value="4" onClick={UpdateObj}>4</button>
          <button type="button" value="5" onClick={UpdateObj}>5</button>
          <button type="button" value="6" onClick={UpdateObj}>6</button>
          <button type="button" value="-" onClick={UpdateObj} className="orange">-</button>
          <br />
          <button type="button" value="1" onClick={UpdateObj}>1</button>
          <button type="button" value="2" onClick={UpdateObj}>2</button>
          <button type="button" value="3" onClick={UpdateObj}>3</button>
          <button type="button" value="+" onClick={UpdateObj} className="orange">+</button>
          <br />
          <button type="button" value="0" onClick={UpdateObj} className="zero">0</button>
          <button type="button" value="." onClick={UpdateObj}>.</button>
          <button type="button" value="=" onClick={UpdateObj} className="orange">=</button>
          <br />
        </td>
      </table>
    </div>
  );
}
