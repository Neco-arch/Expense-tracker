const express = require("express");
const {register , login} = require('../controller/Authentication.js')


const router = express();

router.post('/register' , register )

router.post('/login' , login)

module.exports = router