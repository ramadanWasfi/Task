const {Convert, ConvertCrypto} = require('../services/CurrencyConversionService')

exports.Convert = async (req, res) => {
    let from = req.params.from;
    let to = req.params.to;
    let amount = req.params.amount;
    console.log(`from ${from}     to ${to}      amount  ${amount}`);

    const result = await Convert(from,to,amount);
    const output = {
        from,
        amount,
        to,
        result
    };

    res.status(200).json({output});
}


