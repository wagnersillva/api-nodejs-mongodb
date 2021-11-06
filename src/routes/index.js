const { Router } = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.send({ status: "Ok" });
    res.end();
})  

module.exports = router;