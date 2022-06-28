const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const sellerSchema = new mongoose.Schema({
    username: {type: String, required: true,unique: true},
    email: {type: String, required: true, unique:  true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    // products: {type: Array}
    },
    { collection: 'sellers'}
)

sellerSchema.pre('save',async function(next){
    // const salt = await bcrypt.genSalt();
    this.password = await bcryptjs.hash(this.password,12)
    // console.log('User is about to be stored in database',this);
    next();
})


const Seller = mongoose.model('sellerSchema', sellerSchema)
module.exports = Seller



    // Seller.create ({
    //     email : "sharan.s20@iiits.in",
    //     username : "Sharan",
    //     name : "Sharan Raj",
    //     password: "Sharan@fwwp",
    // })

