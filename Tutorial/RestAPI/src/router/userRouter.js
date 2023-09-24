// Import Express
const express = require('express');

// Use Router
const router = new express.Router();

// Import Users Collection
const User = require("../model/user");

// Home Page API
router.get("/", (req, res) => {
    res.send("<h1>Welcome to REST API</h1>");
});

// API for Insert Employee Details
router.post("/employees", async (req, res) => {
    try {
        //  Set Document in User Collection
        const user = new User(req.body);
        //  Save the Document in the User Collection
        const createUser = await user.save();
        //  Set Created Status
        res.status(201).send(createUser);
        console.log(req.body);
    } catch (error) {
        //  Set Bad Request Status
        res.status(400).send(error);
    }
});

// API for Get all the Employee Details
router.get("/employees", async (req, res) => {
    try {
        //  Find all the Employee Details
        const allEmployeeData = await User.find();
        //  If there is No Data
        if (allEmployeeData.length === 0) {
            //  Set Page Not Found Status
            res.status(404).send("No Data Found !!");
        }
        //  If the Data is Found
        else {
            //  Set Ok Status
            res.status(200).send(allEmployeeData);
        }
        console.log(allEmployeeData);
    } catch (error) {
        //  Set Bad Request Status
        res.status(400).send(error);
    }
})

//  API for Get a perticular Employee Details by ID
router.get("/employees/:id", async (req, res) => {
    try {
        //  Get the from URL Params
        const _id = req.params.id;
        //  Get the Details by ID
        const employeeData = await User.findById(_id);
        //  If there is No Data
        if (employeeData.length === 0) {
            //  Set Page Not Found Status
            res.status(404).send("No Data Found !!");
        }
        //  If the Data is Found
        else {
            //  Set Ok Status
            res.status(200).send(employeeData);
        }
        console.log(employeeData);
    } catch (error) {
        //  Set Bad Request Status
        res.status(400).send(error);
    }
})

//  API for update the Employee Details
router.patch("/employees/:id", async (req, res) => {
    try {
        //  Get the from URL Params
        const _id = req.params.id;
        //  Update the Details by ID
        const updateEmployeeData = await User.findByIdAndUpdate(_id, req.body);
        //  If there is No Data
        if (updateEmployeeData.length === 0) {
            //  Set Page Not Found Status
            res.status(404).send("No Data Found !!");
        }
        //  If the Data is Found
        else {
            //  Set Ok Status
            res.status(200).send(updateEmployeeData);
        }
        console.log(updateEmployeeData);
    } catch (error) {
        //  Set Bad Request Status
        res.status(400).send(error);
    }
})

//  API for update the Employee Details
router.put("/employees/:id", async (req, res) => {
    try {
        //  Get the from URL Params
        const _id = req.params.id;
        //  Update the Details by ID
        const updateEmployeeData = await User.findByIdAndUpdate(_id, req.body);
        //  If there is No Data
        if (updateEmployeeData.length === 0) {
            //  Set Page Not Found Status
            res.status(404).send("No Data Found !!");
        }
        //  If the Data is Found
        else {
            //  Set Ok Status
            res.status(200).send(updateEmployeeData);
        }
        console.log(updateEmployeeData);
    } catch (error) {
        //  Set Bad Request Status
        res.status(400).send(error);
    }
})

//  API for delete the Employee Details
router.delete("/employees/:id", async (req, res) => {
    try {
        //  Get the from URL Params
        const _id = req.params.id;
        //  Delete the Details by ID
        const deleteEmployeeData = await User.findByIdAndDelete(_id);
        //  If there is No Data
        if (deleteEmployeeData.length === 0) {
            //  Set Page Not Found Status
            res.status(404).send("No Data Found !!");
        }
        //  If the Data is Found
        else {
            //  Set Ok Status
            res.status(200).send(deleteEmployeeData);
        }
        console.log(deleteEmployeeData);
    } catch (error) {
        //  Set Bad Request Status
        res.status(400).send(error);
    }
})

module.exports=router;