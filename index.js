const express =require("express")

const Tapp =express();

tapp.use(logger)

tapp.get("/book",logger,(req,res)=>{
    return res.send({route:"/book"})
})

tapp.get("/libraries",logger, checkPermission("librarian"),(req,res) =>{
    return res.send({route:"/libraries"})
})

tapp.get("/authors",logger, checkPermission("author"),(req,res) =>{
    return res.send({route:"/authors"})
})


function logger(req,res,next){
    console.log(req.path)
    next()
}

function checkPermission(cat){
    return function logger1(req,res,next){
        req.permissions=true
    }
    if(req.path=="/libraries"){
        req.permissions=true
    }
    if(req.path=="/authors"){
        req.permissions=true
    }
    next()
}

tapp.listen(5000,()=>{
    console.log("Connect to the port 5000")
})