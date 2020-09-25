var express=require('express')
const courses= require('./routes/courses')

// const logger=require('./logger')
const app=express();
const homepage= require('./routes/homepage')
app.use(express.json());
//to serve url-encoded data
app.use(express.urlencoded({extended:true}));

//to serve static files express.static('name of the folder with the static files')
app.use(express.static('public'));
// app.use(logger);

//If I use localhost:PORT/api/courses then route to courses.js
app.use('/api/courses',courses)
app.use('/',homepage)
app.set('view engine','pug');
app.set('views','./views')





    
const port=process.env.PORT ||3001
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})
