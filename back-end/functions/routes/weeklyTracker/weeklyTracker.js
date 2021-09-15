const router = require("express").Router();

const { getThisWeekTracker } = require("../../handlers/weeklyTrackers");

const Auth = require("../../utils/auth");

router.get("/", Auth, getThisWeekTracker);

module.exports = router;
