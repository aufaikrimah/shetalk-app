// const path = require("path");
// const moduleAlias = require("module-alias");
// // moduleAlias.addAlias("@models", path.join(__dirname, "../../src/models"));

const express = require("express");
const router = express.Router();

const avatarController = require("../controllers/Avatars/avatarController");
const verifyApiKey = require("../middlewares/verifyApiKey");

// [api/avatars]
router.get(`/avatars`, verifyApiKey, avatarController.index);

// [api/avatar/:id{numeric id}]
router.get(`/avatar/:id`, verifyApiKey, avatarController.get);
module.exports = router;
