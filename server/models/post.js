import mongoose from 'mongoose';
import moment from 'moment'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        index: true,    //index를 주면 검색 기능이 향상 된다
    },
    contents: {
        type: String,
        required: true,
    },
    views: {
        type: Number,
        default: -2,    //처음 작성할때도 조회가 되기 때문에 초기값 -2
    },
    fileUrl: {
        type: String,
        default: 'https://source.unslash.com/random/301x201',   //파일의 기본이미지를 넣기 위해 기본값으로 넣은것
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    },
    data: {
        type: String,
        default: moment().format('YYYY-MM-DD hh:mm:ss'),
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Post = mongoose.model("post", PostSchema);

export default Post;