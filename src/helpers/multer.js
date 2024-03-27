import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/temp')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
 const upload = multer({ storage: storage });

 export default function multerMiddleware(req, res, next) {
  // Use multer middleware to handle file upload
  upload.single('profile_picture')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      // Handle multer errors
      return res.status(400).json({ error: 'File upload error' });
    } else if (err) {
      // Handle other errors
      return res.status(500).json({ error: 'Internal server error' });
    }
    // Pass control to the next middleware or route handler
    // console.log(req);
    // next();
    // return res.status(200).json({ error: 'File upload success' });
  });
}