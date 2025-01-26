import multer from "multer";

export const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, 'upload/')
  },
  filename: function(req, file, callback){
    callback(null, `${file.filename} ${Date.now()}`)
  }


})