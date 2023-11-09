// Bring back intellisense lost
const { response } = require( 'express' );
const { validationResult } = require( 'express-validator' );
const { signedUsers } = require( '../db/users' );
const { LocalStorage } = require( 'node-localstorage' );

const localStorage = new LocalStorage( './scratch' );

const createUser = ( req, res = response ) => {
    const { name, email, password } = req.body;

    localStorage.setItem( 'users', JSON.stringify( [ ...signedUsers, { name, email, password } ] ) );
    const tempUsers = localStorage.getItem( 'users' );
    console.log( "🚀 ~ file: auth.js:14 ~ createUser ~ tempUsers:", tempUsers );


    res.json( {
        ok: true,
        message: "User Registered",
        email,
        password,
        name
    } );
};

const loginUser = ( req, res ) => {
    const { email } = req.body;
    const users = JSON.parse( localStorage.getItem( 'users' ) );

    const isRegistered = users.map( user => user.email === email );

    if( isRegistered ) {

        return res.json( {
            message: 'Login endpoint',
            ok: true,

        } );
    } else {


        return res.json( {
            message: 'Login endpoint. User not found',
            ok: false,
        } );
    }



};

const renewUserToken = ( req, res ) => {
    res.json( {
        message: 'Renew endpoint',
        ok: true
    } );
};

module.exports = {
    createUser,
    loginUser,
    renewUserToken
};