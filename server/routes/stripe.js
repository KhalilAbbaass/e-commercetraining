const router = require("express").Router();
const stripe = require("stripe")('sk_test_51LnGaUCib2aCyZibgEsAM3ykl1co6B82OVbJShQ0zjim1uQCj746eG5bpGdyye6iPnKjLeAseQsHdNps9teQLiNc00zQ73mPeE' );


router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency:"usd",
        },
        (stripeErr, stripeRes)=>{
            if(stripeErr){
                res.status(500).json(stripeErr);
            }else {
                res.status(200).json(stripeRes);
            }
        }
    )
})

module.exports = router;