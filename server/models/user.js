import mongoose from 'mongoose';
import moment from 'moment';

//create schema
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ("MainUser", "SubUser", "User"),
        default: "User",
    },
    register_date: {
        type: Date,
        default: moment().format('YYYY-MM-DD hh:mm:ss')
    },
    comments: [
        {
            post_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'posts',
            },
            comment_id: {//코멘트가 포스트가 사라질때 같이 없어져야 한다
                type: mongoose.Schema.Types.ObjectId,
                ref: 'comments',
            }
        }
    ],
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts',
        }
    ]
});

const User = mongoose.model("user", UserSchema);

export default User;