var express=require('express')

const router =express.Router();
var Joi=require('joi');

const courses=[
    {id:1,name:"maths"},
    {id:2,name:"physics"},
    {id:3,name:"Algebra"},
    {id:3,name:"Geometry"}
]

router.get('/',(req,res)=>{
res.send(courses)
});

router.post('/',(req,res)=>{

    const{error}=validate(req.body);
    if (error){
        return res.status(400).send(result.error.message)    }
    const course={
        id:courses.length+1,name:req.body.name
    }
    courses.push(course);
    res.send(course)
})

// To udpate courses
router.put('/:id',(req,res)=>{
    let course=courses.find(c=>
        c.id===parseInt(req.params.id));
    if(!course){
        // return 404
        return res.status(404).send(`the course with the id ${req.params.id} was not found`)
    }
    const{error}=validate(req.body);
    if (error){
        return res.status(400).send(result.error.message)    }

        course.name=req.body.name;
        res.send(course)
})

// Delete courses

router.delete('/:id',(req,res)=>{
    let course=courses.find(c=>
        c.id===parseInt(req.params.id));
    console.log(course);
    if(!course){
        // return 404
        return res.status(404).send(`the course with the id ${req.params.id} was not found`)
    }
    const index= courses.indexOf(course);
    console.log(index)
    courses.splice(index,1)
    res.send(course)
})

router.get('/:id',(req,res)=>{
    let course=courses.find(c=>
        c.id===parseInt(req.params.id));
    if(!course){
        // return 404
        return res.status(404).send(`the course with the id ${req.params.id} was not found`)
    }
    res.send(course);
});


function validate(name){
    const schema={
        name:Joi.string().min(3).required()
    }
    return Joi.validate(name,schema);
          
}

module.exports=router;