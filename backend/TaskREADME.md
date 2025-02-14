# Currency Converter
a simple api to convert fiat-to-fiat currencies

## technologies used
- `dotenv` to save API_KEY
- `Third-Party API` to get the price or the value of conversion

## Assumption
- Fiat-only conversion
- `axios` is installed
- `dotenv` is installed
- Not used in production
- I didn't .env to .gitignore so that you can run without needing api `I won't do this in production` 

Files Structure
  - services
    - CurrencyConversionService.js
  - routes
    - currency.js
  - controllers
    - CurrencyController.js

## prequisites
- Axios `npm instll axios`
- Dotenv `npm install dotenv`


## how to run
- make sure you are in backend folder of the project then run the following command
shell`
    node --watch server.js
`
- in the browser you can type url like `localhost:5000/api/currency/convert/[FROM]/[TO]/[AMOUNT]` by replacing FROM, TO, and AMOUNT by your values 
- `localhost:5000/api/currency/convert/USD/EUR/100`

## What may be done to improve 
- add validation for currencies symbol
- use cache to limit the number of API Calls
- use another API which allows fiat and crypto conversion
