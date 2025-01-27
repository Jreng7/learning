import multer from "multer";

export const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, 'upload/')
  },
  filename: function(req, file, callback){
    const splitExtension = file.originalname.split('.')
    const extension = `.${splitExtension[1]}`
    callback(null, `${splitExtension[0]} ${Date.now()}${extension}`)
  }

})