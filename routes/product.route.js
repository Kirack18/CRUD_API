const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// mostra todos os produtos
router.get('/', getProducts);

// mostra um produtos
router.get("/:id", getProduct);

// cria um produto
router.post("/", createProduct);

// atualiza um produto
router.put("/:id", updateProduct);

// deleta um produto
router.delete("/:id", deleteProduct);




module.exports = router;