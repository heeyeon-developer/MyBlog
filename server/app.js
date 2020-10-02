import express from 'express'
import mongoose from 'mongoose'
import config from './config'
import hpp from 'hpp'
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'

//routes
import postRoutes from './routes/api/post'
import userRoutes from './routes/api/user'
import authRoutes from "./routes/api/auth";
import morgan from 'morgan'

const app = express()
const { MONGO_URI } = config;

const prod = process.env.NODE_ENV === "production"
//보안을 해주는 것
app.use(hpp())
app.use(helmet())
//서로 다른 서버의 접근을 가능하게 해 주는것 spa에서 해주는 것
//origin: 서버를 적는것 true면 모두 허용
//credentials: 설정을 브라우저에 추가하는 것
//morgan은 개발시 로그를 볼 수 있는것
app.use(cors({origin: true, credentials: true}));
app.use(morgan("dev"));

app.use(express.json());

mongoose
.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,   //옵션을 넣지 않고 연결하면 사용했던 DB가 사라질 것 이라는 메세지가 나옴
        useCreateIndex: true,
})
.then(() => console.log("MongoDB connecting Success!!"))
.catch((e) => console.log(e))

//처음 들어온 신호를 모두 받아들이기
//use routes
// app.use('/');
app.use('/api/post',postRoutes)
app.use('/api/user',userRoutes)
app.use("/api/auth",authRoutes)

if(prod){
  app.use(express.static(path.join(__dirname,"../client/build")))
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../client/build","index.html"))
  })
}

export default app;