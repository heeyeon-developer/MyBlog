import express from 'express'

//model
import Post from '../../models/post'
import auth from '../../middleware/auth'
import "@babel/polyfill"
const router = express.Router()
//모든 포스트를 검색하는 라우터 작성
//api/post  //req는 요청    res는 요청에 대한 응답 - 마지막에 꼭 응당이 있어야 성공으로 알아 듣는다
//async를 통해 실행을 요청하고 await에서 기다려서 정보를 받아 받은 정보를 전송하게 되는 구조
router.get('/', async(req, res) => {
    const postFindResult = await Post.find()    //모든 포스트를 찾을 때까지 기다려 줘 라는 의미
    console.log(postFindResult, "All Post Get")
    res.json(postFindResult)

})

router.post('/', auth, async(req,res,next) => {
    try{
        console.log(req,"req")
        //요청을 보낼때 나누어서 쓰지 않기 위해 정의하는 js문법
        const {title, contents, fileUrl, creator} = req.body
        const newPost = await Post.create({
            title, contents, fileUrl, creator
        })
        res.json(newPost)   //작성된 내용을 보내준다
    }catch(e){
        console.log(e)
    }
})
//default로 하면 내보낼때 하나만 내보내게 되고 import시 마음대로 이름을 쓸 수 있다
export default router;