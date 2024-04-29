const product = require('../models/product.model')


const getproducts = async (req, res) => {
    try{
        const products = await product.find()
        res.status(200).json({products})
    }catch(err){res.status(500).json({message: err.message})}
}

const getproduct = async (req, res) => {
    try{
        const Product = await product.find({_id: req.params.id})
        res.status(200).json({Product})
    }catch(err){res.status(500).json({message:err.message})}
}

const createproduct =  async (req, res) => {
    try{
      const Product =   await product.create(req.body)
      res.status(200).json({Product})
    }catch(err){res.status(500).json({message: err.message})}
}

const updateproduct = async (req, res) => {
    try{
        const Product = await product.findByIdAndUpdate(req.params.id, req.body)
        if(!Product){
            res.status(404).json({message: 'product not found'})
        }
        const updatedproduct = await product.findById(req.params.id)
        res.status(200).json({updatedproduct})

    }catch(err){res.status(500).json({message: 'product not found'})}
}

const deleteproduct = async (req, res) => {
    try{
        const {id} = req.params
        const Product = await product.findOneAndDelete(id)
        if(!Product){
            res.status(404).json({message: 'product not found'})
        }
        res.status(200).json({message: 'product deleted'})
    }catch(err){res.status(500).json({message: err.message})}
}

module.exports = {getproducts, getproduct, createproduct, updateproduct, deleteproduct}