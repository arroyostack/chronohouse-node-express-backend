const { Router } = require( 'express' );
const { check } = require( 'express-validator' );
const { validateFields } = require( '../middlewares/fieldValidator' );
const router = Router();
// Endpoint
/*
    User Routes / Auth
    host + /api/auth
*/

// Controllers
const { createUser, renewUserToken, loginUser } = require( '../controllers/auth' );

router.post(
    '/register',
    [
        check( 'name', 'Name is mandatory.' ).not().isEmpty(),
        check( 'email', 'Email is mandatory.' ).isEmail().not().isEmpty(),
        check( 'password', 'Password must be at least 6 characters long.' ).isLength( { min: 6 } ).not().isEmpty(),
        validateFields
    ],
    createUser );

router.post( '/',
    [
        check( 'email', 'Email is mandatory.' ).isEmail().not().isEmpty(),
        check( 'password', 'Password must be at least 6 characters long.' ).isLength( { min: 6 } ).not().isEmpty(),
        validateFields
    ],
    loginUser );

router.get( '/renew', renewUserToken );

module.exports = router;