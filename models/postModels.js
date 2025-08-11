import mongoose from "mongoose";

const postSchema = mongoose.Schema({title:{type:String,required:true},
    content:{type:String}

})

const postModel = mongoose.model("posts",postSchema)
export default postModel