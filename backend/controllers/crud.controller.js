const { createRecord, readRecord, deleteRecord, updateRecord } = require("../services/crud.service");
const Register = require('../models/register.model');

const create = async (req, res) => {
    try {

        const data = req.body;
        const newUser = await createRecord(Register, data);

        if (newUser)
            res.status(201).json({
                success: true,
                message: "created successfully",
                data: newUser
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in creating request",
            error: error
        });
    }
}

const read = async (req, res) => {
    try {
        const users = await readRecord(Register);

        if (users)
            res.status(200).json({
                success: true,
                message: "user data fetched successfully",
                data: users
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in reading request",
            error: error
        });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const updatedUser = await updateRecord(Register, id, data);

        if (updatedUser)
            res.status(200).json({
                success: true,
                message: "updating successfully",
                data: updatedUser
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in updating request",
            error: error
        });
    }
}

const deleting = async (req, res) => {
    try {
        const { id } = req.params;

        const userDeleted = await deleteRecord(Register, id);

        if (userDeleted)
            res.status(200).json({
                success: true,
                message: "deleting successfully",
                data: userDeleted
            });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in deleting request",
            error: error
        });
    }
}

module.exports = { create, read, update, deleting };