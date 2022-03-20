import express from "express";

import { userSignUp, userSignIn } from "../controller/user.js";
import { getProductById, getProducts } from "../controller/product.js";
import { addPaymentGateway, paymentResponse } from "../controller/payment.js";

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userSignIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;