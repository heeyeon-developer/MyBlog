import mongoose, { mongo } from 'mongoose';

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        default: 'none',
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'post',
        }
    ]
});

const Category = mongoose.model('category', CategorySchema);

export default Category;