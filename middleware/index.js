 
 var middlewareObject ={};

 
middlewareObject.isContractorLoggedIn=function(req,res,next){
    if (req.user.role === 'Contractor') return next();
    console.log("Middleware error");
    req.flash("error","Hi Contractor Please Login First")
    res.redirect("/");
} 

 middlewareObject.isLoggedIn=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","Hi  Please Login First")
    res.redirect("/");
} 

 
//won't work until user database is set
middlewareObject.isUserLogged=function(req,res,next){
    if(username!=null && password!=null){
        console.log("user middleware");
        return next();
    }
    else{
        req.flash("error","Please Create a user acount first")
        res.redirect("/");
    }
}



 module.exports=middlewareObject;