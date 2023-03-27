import {Schema, model} from 'mongoose';

const HouseSchema = new Schema({
    thumbnail: String,
    description:String,
    price: Number,
    location: String,
    status: Boolean,

    // refereciando o usuário que fez login.
    user:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    toJSON: {
        virtuals:true
    }
}
);

HouseSchema.virtual('thumbnail_url').get(function(){
    return `http://localhost:3333/files/${this.thumbnail}`
})

export default model('House', HouseSchema);