const Product = require('../database/models/product')

//@route     POST /api/products/
//@access    private
exports.create = async (req, res) => {
  const { sku, name, price, brand } = req.body
  try {
    const product = await Product.create({ sku, name, price, brand })
    return res.json({ product })
  } catch (err) {
    return res.json({ err })
  }
}

//@route     PUT /api/products/:productId
//@access    private
exports.update = async (req, res) => {
  const { sku, name, price, brand } = req.body
  const { productId } = req.params.productId
  try {
    let product = await Product.findOne({ where: { id: productId } })
    product.sku = sku || product.sku
    product.name = name || product.name
    product.price = price || product.price
    product.brand = brand || product.brand
    product.save()
    return res.json({ product })
  } catch (err) {
    return res.json({ err })
  }
}

//@route     GET /api/users/
//@access    public
exports.getAll = async (req, res) => {
  try {
    const products = await Product.find()
    return res.json({ products })
  } catch (err) {
    return res.json(err)
  }
}

//@route     GET /api/users/:productId
//@access    private
exports.getProduct = async (req, res) => {
  const { productId } = req.params.productId
  try {
    const product = await Product.findOne({ where: { id: productId } })
    return res.json({ product })
  } catch (err) {
    return res.json({ err })
  }
}
