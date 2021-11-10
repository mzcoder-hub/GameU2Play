import path from 'path'
import express from 'express'
import multer from 'multer'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/assets/images/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    return cb('Images only')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/primary', upload.single('image'), (req, res) => {
  // console.log(req)
  res.send(`/${req.file.path}`)
})

router.post('/', upload.array('image', 5), (req, res) => {
  const files = req.files
  if (!files) {
    const error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  } else {
    const newArr = []
    for (let i = 0; i < files.length; i++) {
      // console.log(files[i].path)
      newArr.push(files[i].path)
    }

    // console.log(JSON.encode(newArr))

    res.send(newArr)
  }
})

export default router
