import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';


describe('Calculator', () => {
  let container;
  let equalsButton;
  let runningTotal;
  beforeEach(() => {
    container = render(<Calculator/>)
    equalsButton = container.getByTestId("operator-equals")
    runningTotal = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const calculatorAdd = container.getByTestId("operator_add")
    

    fireEvent.click(button1);
    fireEvent.click(calculatorAdd);
    fireEvent.click(button4);
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('5')
    
  })

  it('should subtract 4 from 7 and get 3', () => {

  const button4 = container.getByTestId('number4');
  const button7= container.getByTestId("number7");
  const caluclatorSubtract = container.getByTestId('operator-subtract');

  fireEvent.click(button7);
  fireEvent.click(caluclatorSubtract);
  fireEvent.click(button4);
  fireEvent.click(equalsButton);
  expect(runningTotal.textContent).toEqual('3')
  })


  it('should multiply 3 by 5 and get 15', () => {

    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    
    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5); 
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15') 
  
  })


  it('should divide 21 by 7 and get 3', () => {

    const button7 = container.getByTestId('number7');
    const button3 = container.getByTestId('number3');
    const multiplyButton = container.getByTestId('operator-multiply');
    const divideButton = container.getByTestId('operator-divide')

    fireEvent.click(button3);
    fireEvent.click(multiplyButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    fireEvent.click(divideButton);
    fireEvent.click(button7);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number button clicks', () => {

    const button3 = container.getByTestId('number3');

    fireEvent.click(button3);
    fireEvent.click(button3);
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('333')
  
  })

  it('should be able to chain multiple operations together',() => {

    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiplyButton = container.getByTestId('operator-multiply');
    const calculatorAdd = container.getByTestId("operator_add")

    fireEvent.click(button3);
    fireEvent.click(calculatorAdd);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('30');

  })

  it('should be able to clear the running total wihtout affecting the calculation', () => {

    const button5 = container.getByTestId('number5');
    const calculatorAdd = container.getByTestId("operator_add");
    const clearButton = container.getByTestId('clear');

    fireEvent.click(button5);
    fireEvent.click(calculatorAdd);
    fireEvent.click(button5)
    fireEvent.click(equalsButton);
    fireEvent.click(clearButton);
    fireEvent.click(calculatorAdd);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);
    expect(runningTotal.textContent).toEqual('15')


    

  })




})

