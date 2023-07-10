const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/exam", require("./exam"));

module.exports = router;