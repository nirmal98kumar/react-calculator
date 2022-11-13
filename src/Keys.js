import React from "react";

const numbers = ['1','2','3','4']
const operators = ['+','-','*','/','=']

const Keys = () => {

    return (
        <div>
            <NumberPad/>
            <OperatorPad/>
        </div>
    )
}

const NumberPad = () => {

    return (
        numbers.map(number =>
            <div>
                <button>{number}</button>
            </div>
        )
    )
}

const OperatorPad = () => {

    return (
        operators.map(operator =>
            <div>
                <button>{operator}</button>
            </div>
        )
    )
}

export default Keys;