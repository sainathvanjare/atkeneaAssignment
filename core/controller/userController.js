const User = require('../model/user');

exports.getAllUsers = (req, res, next) => {
    User.find({})
        .then((result) => {
            res.status(200).json({
                message: "Users fetched successfully.",
                data: result
            })
        })
        .catch(err => {
            res.status(400).json({ message: "Data retrieval failed" })
        });
};

exports.createUser = (req, res, next) => {
    User.find({ email: req.body.email }).then((result) => {
        // Check Unique email id
        if (result && result.length == 0) {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNo: req.body.phoneNo,
                email: req.body.email,
                profilePic: req.body.profilePic
            })
            user.save()
                .then((result) => {
                    res.status(200).json({
                        message: "User created successfully.",
                        data: result
                    })
                })
                .catch(err => {
                    res.status(400).json({ message: "User not created successfully" })
                });
        } else {
            res.status(400).json({
                message: "Emailid already exists."
            })
        }
    }).catch(err => {
        res.status(400).json({ message: "User not created successfully" });
    })
};

exports.updateUser = (req, res, next) => {

    User.updateOne({ _id: req.body._id, email: req.body.email }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            profilePic: req.body.profilePic
        }
    })
        .then((result) => {
            res.status(200).json({
                message: "User updated successfully.",
                data: result
            })
        })
        .catch(err => {
            res.status(400).json({ message: "User updation failed." })
        });
};

exports.deleteUser = (req, res, next) => {
    User.deleteOne({ _id: req.params.id })
        .then((result) => {
            res.status(200).json({
                message: "User deleted successfully.",
                data: result
            })
        })
        .catch(err => {
            res.status(400).json({ message: "User not deleted successfully." })
        });
};


