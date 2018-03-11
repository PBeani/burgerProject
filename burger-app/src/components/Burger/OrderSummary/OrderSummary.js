import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliar/Auxiliar'
import Buttom from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('Will update')
    }

    render() {
        const props = this.props
        const ingredientSummary = Object.keys(props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                    </li>)
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <Buttom btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Buttom>
                <Buttom btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Buttom>
            </Aux>
        )
    }
}

export default OrderSummary