/**
* Currency Conversion Service Module
* 
* This module provides services for Converting Currencies and Crypto Currencies.
*
* utilities for error handling.
* 
* Functions:
* 
* 1. Convert(from, to, amount)
*    - Converts from currency(from) to currency(to).
*    - Returns the value of the amount converted.
* 
* Example Usage:
* 
* const currencyService = require('./currencyService');
* 
* // ConvertFiat
* currencyService.ConvertFiat(from,to,amount)
*   .then(result => console.log(result))
*   .catch(err => console.error(err));
* 
*/                                                                                                                                                                                                                                                                                                                              
const axios = require('axios');
require('dotenv').config();

exports.Convert = async (from, to, amount) => {
    const options = {
        method: 'GET',
        url: `https://v6.exchangerate-api.com/v6/${process.env.FIAT_API_KEY}/pair/${from}/${to}/${amount}`
    }
    try {
	    const response = await axios.request(options);
	    if(response.data.result === 'success') {
            console.log(response.data);
            return response.data.conversion_result;
        }
    } catch (error) {
	    console.error(error);
    }  

}

