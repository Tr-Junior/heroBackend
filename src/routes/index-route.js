'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (_req, res, next) => {
    res.status(200).send({
        titel: "Seja o Herói",
        version: "0.1.2"
    });
});



module.exports = router;
