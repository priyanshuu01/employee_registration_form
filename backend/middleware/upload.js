// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "_" + file.originalname);
//   }
// });

// const upload = multer({ storage });

// module.exports = upload;


const multer = require("multer");
const path = require("path");



const storage = multer.diskStorage({

    destination:(req,file,cb)=>{


        if(file.fieldname==="profilePhoto"){

            cb(
                null,
                "uploads/profilePhotos"
            );

        }


        else if(file.fieldname==="resume"){

            cb(
                null,
                "uploads/resumes"
            );

        }

    },



    filename:(req,file,cb)=>{


        cb(
            null,
            Date.now() + 
            path.extname(file.originalname)
        );


    }


});





const fileFilter=(req,file,cb)=>{


    if(
        file.fieldname==="profilePhoto"
        &&
        file.mimetype.startsWith("image/")
    ){

        cb(null,true);

    }


    else if(
        file.fieldname==="resume"
        &&
        file.mimetype==="application/pdf"
    ){

        cb(null,true);

    }


    else{

        cb(
            new Error(
              "Invalid file type"
            ),
            false
        );

    }


};





const upload = multer({

    storage,

    fileFilter

});




module.exports = upload;