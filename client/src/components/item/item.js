import React, { Component } from 'react';
import './item.css';
import items from '../../items.json';
import Listitem from '../Listitem'

class Item extends Component {

    state = {
        item: window.location.search.split('').slice(12).join(''),
        ingredients: []
    };

    componentDidMount = () => {
        console.log(this.state.item)
        
        document.getElementById('item-title').innerHTML = items[this.state.item].name;
        document.getElementById('item-image').setAttribute('src', items[this.state.item].photo_url)
        document.getElementById('item-description').innerHTML = items[this.state.item].description
        document.getElementById('item-directions').innerHTML = items[this.state.item].directions;
        this.setState({ ingredients: items[this.state.item].ingredients })

        //set price range
        if (items[this.state.item].price.length === 1) {
            document.getElementById('price-range').innerHTML = '$' + items[this.state.item].price[0]
        } else {
            document.getElementById('price-range').innerHTML =
                '$' + items[this.state.item].price[0] + ' - ' + '$' + items[this.state.item].price[items[this.state.item].price.length - 1]
        }

        //populate checkout option drop down menu
        document.getElementById('paypal-item-name-header').setAttribute('value', items[this.state.item].name)

        let currencyCode = document.createElement('input')
        currencyCode.setAttribute('type','hidden')
        currencyCode.setAttribute('name','currency_code')
        currencyCode.setAttribute('value','USD')
        document.getElementById('paypal-form').append(currencyCode)
        
        //dynamically set up information for each product received from db
        for (var i = 0; i < items[this.state.item].sizes.length; i++) {
            let newOption = document.createElement("option")
            newOption.setAttribute('value', items[this.state.item].sizes[i])
            newOption.text = `${items[this.state.item].sizes[i]}; $${(items[this.state.item].price[i] ? items[this.state.item].price[i] : items[this.state.item].price[0])}`
            document.getElementById('checkout-dropdown').append(newOption)

            let newDropdownLogic = document.createElement('input')
            newDropdownLogic.setAttribute('type', 'hidden')
            newDropdownLogic.setAttribute('name', 'option_select' + i)
            newDropdownLogic.setAttribute('value', items[this.state.item].sizes[i])
            document.getElementById('paypal-form').append(newDropdownLogic)

            let newDropdownLogicPrice = document.createElement('input')
            newDropdownLogicPrice.setAttribute('type', 'hidden')
            newDropdownLogicPrice.setAttribute('name', 'option_amount' + i)
            newDropdownLogicPrice.setAttribute('value', (items[this.state.item].price[i] ? items[this.state.item].price[i] : items[this.state.item].price[0]))
            document.getElementById('paypal-form').append(newDropdownLogicPrice)
        }

        //insert paypal button
        let payPalButton = document.createElement('input')
        payPalButton.setAttribute('id', 'paypal-button')
        payPalButton.setAttribute('type', 'image')
        payPalButton.setAttribute('src', 'https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif')
        payPalButton.setAttribute('border', '0')
        payPalButton.setAttribute('name', 'submit')
        payPalButton.setAttribute('alt', 'PayPal - The safer, easier way to pay online!')
        payPalButton.setAttribute('target','_blank')
        document.getElementById('paypal-form').append(payPalButton)

        {/* <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
        let payPalImage = document.createElement('img')
        payPalImage.setAttribute('border','0')
        payPalImage.setAttribute('src','https://www.paypalobjects.com/en_US/i/scr/pixel.gif')
        payPalImage.setAttribute('width','1')
        payPalImage.setAttribute('height','1')
        document.getElementById('paypal-form').append(payPalImage)

    }

    render() {
        return (
            <div>
                <div id='item-div'>
                    <h1 id='item-title'></h1>
                    <img id='item-image'></img>

                    <div id='checkout-area'>
                        <h3 id='price-range'></h3>
                        {/* <select id='checkout-dropdown' class="form-control">
                            <option>Select an option</option>
                        </select> */}
                        <form id='paypal-form' class='mt-5' action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
                            <input type="hidden" name="cmd" value="_xclick" />
                            <input type="hidden" name="business" value="inkedergonomics@gmail.com" />
                            <input type="hidden" name="lc" value="US" />
                            <input id='paypal-item-name-header' type="hidden" name="item_name" />
                            <input type="hidden" name="button_subtype" value="services" />
                            <input type="hidden" name="no_note" value="0" />
                            <input type="hidden" name="currency_code" value="USD" />
                            <input type="hidden" name="tax_rate" value="7.000" />
                            <input type="hidden" name="shipping" value="4.99" />
                            <input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest" />
                            <table>
                                <tr><td><input type="hidden" name="on0" value="Select Dosage" />Select Dosage</td></tr><tr><td><select id='checkout-dropdown' name="os0">
                                    {/* <option value="25mg - 30 count">25mg - 30 count $29.99 USD</option>
                                    <option value="50mg - 30 count">50mg - 30 count $49.99 USD</option>
                                    <option value="100mg - 30 count">100mg - 30 count $89.99 USD</option>
                                    <option value="150mg - 30 count">150mg - 30 count $119.99 USD</option>
                                    <option value="200mg - 30 count">200mg - 30 count $139.99 USD</option> */}
                                </select> </td></tr>
                            </table>
                            {/* <input type="hidden" name="option_select0" value="25mg - 30 count" />
                            <input type="hidden" name="option_amount0" value="29.99" />
                            <input type="hidden" name="option_select1" value="50mg - 30 count" />
                            <input type="hidden" name="option_amount1" value="49.99" />
                            <input type="hidden" name="option_select2" value="100mg - 30 count" />
                            <input type="hidden" name="option_amount2" value="89.99" />
                            <input type="hidden" name="option_select3" value="150mg - 30 count" />
                            <input type="hidden" name="option_amount3" value="119.99" />
                            <input type="hidden" name="option_select4" value="200mg - 30 count" />
                            <input type="hidden" name="option_amount4" value="139.99" />
                            <input type="hidden" name="option_index" value="0" /> */}
                            {/* <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" /> */}
                        </form>

                    </div>

                    <h3 class='pt-5'>Description</h3>
                    <p id='item-description'></p>

                    <h3 class='pt-5'>Directions</h3>
                    <p id='item-directions'></p>
                    <h3 class='pt-5'>Ingredients</h3>
                    <ul id='ingredients-ul'>
                        {this.state.ingredients.length ? (this.state.ingredients.map(ingredient => {
                            return (
                                <Listitem
                                    ingredient={ingredient}

                                />)
                        })) : (
                                console.log('no ingredients')
                            )}
                    </ul>
                </div>
            </div >
        )
    }
}

export default Item;