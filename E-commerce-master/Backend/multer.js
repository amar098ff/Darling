const multer = require('multer')
const path= require('path')

const storage = multer.diskStorage({destination:(req,file,cb)=>{
    cb(null,'uploads/')
},
filename:(req,file,cb)=>{
    const uniSuffix = Date.now()+ Math.round(Math.random()*1e9)
    const fileName = file.originalname.split('.')[0]
    const fileExtension =path.extname(file.originalname)
    cb(null,uniSuffix+fileName+fileExtension)

}

})
const upload = multer({storage:storage})
module.exports = upload;