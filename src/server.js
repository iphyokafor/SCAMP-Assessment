import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import inventoryRoute from './routes/inventoryRoute';
dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Mongodb connection string
mongoose.connect(
    process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (err) => {
        if (err) throw err;
        else console.log('connected to db!')
    });

app.use('/api/auth', userRoute);
app.use('/', productRoute);
app.use('/', inventoryRoute);

const port = process.env.PORT || 7070;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
})

export default app;