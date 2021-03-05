const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("home", {
		meta: req.app.get("meta"),
		article: req.app.get("article"),
		posts: req.app.get("posts"),
		// comments: req.app.get("comments"),
	});
});
router.get("/foo", (req, res) => {
	res.render("sample", {
		posts: req.app.get("posts"),
	});
});
// router.get("/f");

module.exports = router;
