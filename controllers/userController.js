const { User } = require("../models");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find().select('-__v').populate("thoughts");
      res.json(users);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select('-__v').populate("thoughts");

      if (!user) {
        return res.status(404).json({ message: "No user with that ID" });
      }

      return res.status(200).json(user);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update a users data
  async updateUser(req, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: false }
      );
      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async deleteUser(req, res) {
    try {
      const dbUserData = await User.findOneAndDelete({
        _id: req.params.userId,
      });
      res.status(200).json(dbUserData);
    } catch (err) {
      res.status(500).json(dbUserData);
    }
  },
  async addNewFriend(req, res) {
    try {
      const friend = await User.findOne({ _id: req.params.friendId });

      if (!friend) {
        return res.status(404).json("No friend found with that ID");
      }

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json("No user found with that ID");
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      const friend = await User.findOne({ _id: req.params.friendId });

      if (!friend) {
        return res.status(404).json("No friend found with that ID");
      }

      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json("No user found with that ID");
      }

      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
