const express =require("express")

const Tapp =express();

tapp.use(logger)

tapp.get("/book",logger,(req,res)=>{
    return res.send({route:"/book"})
})

tapp.get("/libraries",logger, checkPermission("librarian"),(req,res) =>{
    return res.send({route:"/libraries",catching:true})
})

tapp.get("/authors",logger, checkPermission("author"),(req,res) =>{
    return res.send({route:"/authors",catching:true})
})


function logger(req,res,next){
    if(req.path=="/books"){
    console.log(req.path)
    next()
    }
    else if(req.path=="/libraries"){
        console.log(req.path)
        next() 
    }
    else if(req.path=="/authors"){
        console.log(req.path)
        next() 
    }
}

function checkPermission(catching){
    return function logger1(req,res,next){
        if(catching == "librarian"){
            return next()
        }
       else if(catching =="author"){
            return next()
        }
        else {
            return false
        }
    }
    
}

tapp.listen(5000,()=>{
    console.log("Connect to the port 5000")
})