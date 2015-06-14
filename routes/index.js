var express = require('express');
var router = express.Router();
var tool = require("./tool");
// import log.js
var log = require("./log");

// import nest.js
var nest = require("./nest");

// import profile.js
var profile = require("./profile");

// import profile.js
var friends = require("./friends");


// log.js
router.use("/log/login",log.signed ,log.login);
router.use("/log/logup", log.logup);
router.use("/log/logout", log.logout);
router.use("/log/search", log.search);


// nest.js
router.use("/nest/setup", nest.setup);
router.use("/nest/join", nest.join);
router.use("/nest/del", nest.del);
router.use("/nest/chat", nest.chat);
router.use("/nest/publish", nest.publish);

// profile.js
router.use("/profile/selfinfo", profile.selfinfo);
router.use("/profile/save", profile.save);

// friends.js
router.use("/friends/add",log.signed , friends.add);
router.use("/friends/del",log.signed , friends.del);
router.use("/friends/chat",log.signed , friends.chat);
router.use("/friends/all",log.signed , friends.findAll);



module.exports = router;
