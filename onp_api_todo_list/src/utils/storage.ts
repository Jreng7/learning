import multer from "multer";

export const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, 'upload/')
  },
  filename: function(req, file, callback){
    const extension = file.originalname.split('.')
    callback(null, `${file.filename} ${Date.now()}`)
  }


})