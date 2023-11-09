const { response } = require( 'express' );

const convertCurrency = ( req, res = response ) => {
    const amount = req.body.amount;
    const currency = req.body.currency;
    if( amount <= 0 ) {
        res.json( {
            message: "Bad request"
        } );
    } else if( currency === 'dollar' ) {
        const data = amount / 1.20;
        res.json( {
            message: data
        } );

    }

    console.log( 'Reached currency' );
    res.json( {
        ok: true,
        message: "Reache conversion api"
    } );
};

module.exports = {
    convertCurrency
};