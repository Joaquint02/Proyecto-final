const express = require("express");

const router = express.Router();


const {

getProducts,

createProduct,

getProductById,

updateProduct,

deleteProduct

} = require("../controllers/productController");




// PUBLICO
// Ver productos sin login

router.get(
"/",
getProducts
);



// Ver detalle producto

router.get(
"/:id",
getProductById
);




// ADMIN

router.post(
"/",
createProduct
);


router.put(
"/:id",
updateProduct
);


router.delete(
"/:id",
deleteProduct
);



module.exports = router;