const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/product", require("./userProduct"));

module.exports = router;