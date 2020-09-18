import mongoose from "mongoose";
import moment from "moment";

const CommentSchema = new mongoose.Schema({
  contents: {
    type: String,
    required: true, //index를 주면 검색 기능이 향상 된다
  },
  data: {
    type: String,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'post',
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  creatorName: {//작성자 이름을 만들어서 댓글을 달 때 db에 깊게 들어갈 필요가 없게 만들어 준다
      type: String,
  },
});

const Comment = mongoose.model("comment", CommentSchema);

export default Comment;
