import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmMerchantKey, paytmParams } from '../index.js';

import formidable from 'formidable';
import https from 'https';

export const addPaymentGateway = async (req, res) => {
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
    try {
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }
        res.json(params);
    } catch (error) {
        console.log(error);
    }
}

export const paymentResponse = (req, res) => {
    const form = new formidable.IncomingForm();
    let paytmCheckSum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerifySignature = paytmchecksum.verifySignature(req.body, 'bKMfNxPPf_QdZppa', paytmCheckSum);
    console.log(isVerifySignature);
    if(isVerifySignature) {
        paytmParams['MID'] = req.body.MID;
        paytmParams['ORDERID'] = req.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function(checksum) {
            paytmParams['CHECKSUM'] = checksum;

            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            var response = '';
            var post_req = https.request(options, function(post_res) {
                post_res.on('data', function(chunk) {
                    response += chunk;
                })
                post_res.on('end', function() {
                    let result = JSON.parse(response);
                    res.redirect('http://localhost:3000')
                });
            });

            post_req.write(post_data);
            post_req.end();
        });
    } else {
        console.log("CheckSum Mismatched");
    }
}