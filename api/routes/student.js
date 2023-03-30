const express = require('express');
const Student = require('../modal/Student');
const router = express.Router();


router.get('/', async (req, res, next)=>{
    const allData = await Student.find({}, {_id:0}).sort({ name:-1 })
    if(allData){
        res.status(200).json({
            code:200,
            msg:"Student List",
            students:allData
        })
    } else {
        res.status(400).json({
            code:400,
            msg:'Error 400'
        })
    }
    
});


router.get('/:id', async (req, res, next)=>{
    const id = req.params.id;
    const sData = await Student.find({ _id:id }, {_id:0})
    if(sData){
        res.status(200).json({
            code:200,
            msg:"Student Data",
            students:sData
        })
    } else {
        res.status(400).json({
            code:400,
            msg:'Error 400'
        })
    }
    
});

router.post('/', (req, res, next)=>{
    const student = new Student({
        name:req.body.name,
        class:req.body.class,
        rollno:req.body.rollno,
        dob:req.body.dob,
        gender:req.body.gender,
        address:req.body.address
    })

    const studData = student.save();
    if(studData){
        res.status(200).json({
            code:200,
            msg:'New Student Created.',
            result:student
        })
    }else{
        res.status(400).json({
            code:400,
            msg:'Error 400'
        })
    }
    
});

router.put('/:id', async (req, res, next)=>{
    const id = req.params.id;
    const uData = await Student.findByIdAndUpdate({ _id:id }, { $set:{ name:req.body.name, class:req.body.class, rollno:req.body.rollno, dob:req.body.dob, gender:req.body.gender, address:req.body.address }});
    if(uData){
        res.status(200).json({
            code:200,
            msg:'Student updated.',
            result:uData
        });
    }else{
        res.status(400).json({
            code:400,
            msg:'Error 400'
        })
    }
    
});


router.delete('/:id', async (req, res, next)=>{
    const id = req.params.id;
    const sData = await Student.findByIdAndDelete({ _id:id })
    if(sData){
        res.status(200).json({
            code:200,
            msg:"Student Data Deleted",
            result:sData
        })
    } else {
        res.status(400).json({
            code:400,
            msg:'Error 400'
        })
    }
    
});

module.exports = router;