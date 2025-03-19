const errorhandler = require('../util/Error')

module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500
    err.message = err.message

    if(err.name==="CastError"){
        const message=`Resource is not found with this id.. Invalid ${this.err.path}`
        err= new ErrorHandler(message,400)
    }
      if(err.code ===11000){
        const message =`Duplicate key ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message ,400)
      }

     if(err.name==="JsonWebTokenError"){
        const message = 'Your url is invalid please try again letter'
        err= new ErrorHandler(message,400)
     }

     if(err.name === "TokenExpiredError"){
        const message='Your url is expired please try again'
        err= new ErrorHandler(message,400)
     }

     res.status(err.statusCode).json({success:false,message:err.message})
}