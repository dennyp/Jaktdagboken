import crypto from 'crypto'
import path from 'path'
import { GridFsStorage } from 'multer-gridfs-storage'
import multer from 'multer'

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.DB_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = buf.toString('hex') + path.extname(file.originalname)
        const fileInfo = {
          filename: filename,
          bucketName: 'images',
        }
        resolve(fileInfo)
      })
    })
  },
})

const upload = multer({ storage })

export default upload
