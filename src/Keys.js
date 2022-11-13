import React from "react";

const numbers = ['1','2','3','4']
const operators = ['+','-','*','/','=']

const Keys = (props) => {
    const { selectedNumbers,selectedOperator } = props;
    return (
        <div>
            <NumberPad selectedNumbers={selectedNumbers} />
            <OperatorPad  selectedOperator={selectedOperator}/>
        </div>
    )
}

const NumberPad = (props) => {

    return (
        numbers.map(number =>
            <div>
                <button onClick={() => props.selectedNumbers(number)}> {number}</button>
            </div>
        )
    )
}

const OperatorPad = (props) => {

    return (
        operators.map(operator =>
            <div>
                <button onClick={() => props.selectedOperator(operator)}>{operator}</button>
            </div>
        )
    )
}

export default Keys;