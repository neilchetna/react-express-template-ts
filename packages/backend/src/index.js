import express from 'express'
import bodyParser from 'body-parser'

const port = process.env.PORT || 5000;
const app = express()

app.listen(port, (err) => {
    if(err){
        console.error(`Error ${err.message}`);
    } else {
        console.log(`Listening on port ${port}`);
    }
})