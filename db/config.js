const mongoose = require( 'mongoose' );

const dbConection = async () => {
    try {
        mongoose.connect( process.env.DB_CNN,
            {
                userNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateUSer
            } );

    } catch( error ) {
        console.log( error );
        throw new Error( 'Error whili initializating Db.' );
    }
};