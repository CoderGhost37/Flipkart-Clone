import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

import DefaultData from './default.js';
import Routes from './routes/routes.js'

dotenv.config();
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/',Routes);

const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

// default data to database
DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'https://localhost:8000/callback';
paytmParams['EMAIL'] = 'ghost123@gmail.com';
paytmParams['MOBILE_NO'] = '1234567890';