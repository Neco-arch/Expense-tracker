const express = require("express");
const passport = require("passport");

const router = express.Router();

const { gettransactions , addtransactions , DeleteTransaction , EditTransaction} = require('../controller/TranController.js')

const requireAuth = passport.authenticate("jwt", { session: false });

router.use(requireAuth);

router.get("/", gettransactions);          // GET /transactions?type=income
router.post("/", addtransactions);       // POST /transactions
router.put("/:id", EditTransaction);     // PUT /transactions/5
router.delete("/:id",DeleteTransaction );  // DELETE /transactions/5


module.exports = router;