const router = require("express").Router();

// import the controllers
const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  addNewFriend,
  removeFriend
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

router
  .route("/:userId/friends/:friendId")
  .post(addNewFriend)
  .delete(removeFriend);

module.exports = router;
