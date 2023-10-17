const mongoose = require("mongoose");

const CrickSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:String,
        mobile:Number,
        style:{
            type:String,
            enum:["batsman","bowler","wc","allrounder"]
        },
        status:Boolean
    }
  )
  const player = new mongoose.model("player",CrickSchema)
  module.exports = player;