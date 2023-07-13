const router = require("express").Router();

router.use("/auth", require("./auth"));
router.use("/post", require("./userProduct"));

module.exports = router;