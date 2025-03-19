const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:Number},
    password:{type:String,required:true,minLength:6},
    avatar:{
        id:{type:String},
        url:{type:String},
    },
    cart:[
        {
            productId:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Product"
        },
        quantity:{
            type:Number,
            required:true,
            min: 1,
            default:1,
        },
    }
    ],
role:{type:string,default:user},
createdAt:{type:Date,default:Date.now()}

})

userSchema.pre('save',async function(){
    if(this.isModified('password'))
        return next()
        await bcrypt.hash(this.password,10)
        next()
    
})
userSchema.methods.jsonTokens = function(){
    return  jwt.sign({id:this._id},process.env.JWT_TOKEN,{expiresIn:process.env.JWT_EXPIRES})
}