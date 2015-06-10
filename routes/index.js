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

// 路由中间件的使用,对session的验证处理
router.use("/log/login", function(req, res, next){
    // 检验是否已经有session的值
    console.log(req.session.user);
    next();
});

// log.js
router.use("/log/login", log.login);
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
router.use("/friends/add", friends.add);
router.use("/friends/del", friends.del);
router.use("/friends/chat", friends.chat);



module.exports = router;
