const express = require('express');
const employee = require('../models/employee');
const Employee = require('../models/employee');
const router = express.Router()
//read all
router.get('/', async(req,res) => {
    try{
    const employee = await Employee.find();
    res.json(employee);
    }catch(err){
        res.status(500).json({ message: err.message });
    }
});

//readOne
router.get('/:id', getEmployee,async (req,res) => {
    
});

//createOne
router.post('/', async(req,res) => {
    console.log(req.body);
    const employeeTemp = new Employee({
        name : req.body.name,
        address : req.body.address,
        shift : req.body.shift,
        phonenumber : req.body.phonenumber,
        email : req.body.email
    });
    try{
        const newemployee = await employeeTemp.save();
        res.status(201).json(newemployee);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
});

//updateOne
router.patch('/:id', getEmployee, async(req,res) => {
    if(req.body.name!=null){
        res.employee.name = req.body.name;
    }
    if(req.body.address!=null){
        res.employee.address = req.body.address;
    }
    if(req.body.shift!=null){
        res.employee.shift = req.body.shift;
    }
    if(req.body.phonenumber!=null){
        res.employee.phonenumber = req.body.phonenumber;
    }
    if(req.body.email!=null){
        res.employee.email = req.body.email;
    }
    try{
        const newEmp = await res.employee.save();
        res.status(200).json(newEmp);
    }catch(err){
        res.status(404).json({ message : err.message });
    }
});

//deleteOne
router.delete('/:id', getEmployee, async(req,res) => {
    try{
    const rememp = await res.employee.remove();
    res.status(200).json({ message : rememp.name+' info removed sucessfully' });
    }catch(err){
        res.status(500).json({ message : err.message });
    }
});

//middleware to get employee by id
async function getEmployee(req, res, next){
    let employee;
    try{
        employee = await Employee.findById(req.params.id);
        if(employee == null){
            return res.status(404).json({ message : 'cannot find employee'});
        }
    }catch (err){
        return res.status(404).json({ message : err.message });
    }
    res.employee = employee;
    next();
}

module.exports = router