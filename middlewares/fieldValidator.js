const { res } = require( 'express' );
const { validationResult } = require( 'express-validator' );

const validateFields = ( req, res = res, next ) => {
    const errors = validationResult( req );

    if( !errors.isEmpty() ) {
        return res.json( {
            ok: false,
            erros: errors.mapped()
        } );
    }

    next();
};

module.exports = {
    validateFields
};