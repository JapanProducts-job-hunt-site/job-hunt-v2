var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/', ensureAuthenticated, function (req, res) {

	// Rendering to mypage (index) with username and _id
	console.log('[Login to mypage] username:' + req.user.name);
	res.render('index', {
		username: req.user.name,
		db_id: req.user._id
	});
});

// Prevent user from seeing dashboard page without logging in
function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		// if logged in keep going
		return next();
	} else {
		res.redirect('/users/login');
	}
}

module.exports = router;
