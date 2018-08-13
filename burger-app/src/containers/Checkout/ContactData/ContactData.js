import React, { Component } from 'react'
import Buttom from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your ZIP code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your e-mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true })

        const formElements = this.state.orderForm;
        let formData = {};

        for(let id in formElements) {
            formData[id] = formElements[id].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    inputChangedHandler = (event, key) => {
        let updatedForm = {
            ...this.state.orderForm
        };

        let updatedFormElement = {
            ...updatedForm[key]
        };

        updatedFormElement.value = event.target.value;
        updatedForm[key] = updatedFormElement;
        this.setState({orderForm: updatedForm});
    }

    render() {
        let formElementsArray = [];

        for (let key in this.state.orderForm) {
            formElementsArray.push({
                key: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form onSubmit={this.orderHandler}>
                    {formElementsArray.map(formElement => {
                        return (
                            <Input 
                                elementType={formElement.config.elementType}
                                value={formElement.config.value}
                                elementConfig={formElement.config.elementConfig}
                                key={formElement.key}
                                changed={(event) => { this.inputChangedHandler(event, formElement.key)}} />
                        )
                    })}
                    <Buttom btnType="Success">ORDER</Buttom>
                </form>
            </div>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return form
    }
}

export default ContactData