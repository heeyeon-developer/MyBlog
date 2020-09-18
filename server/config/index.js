import dotenv from 'dotenv';
dotenv.config()
//밖에서 간단하게 불러 오기 위해 사용하는 것
export default {
    MONGO_URI: process.env.MONGO_URI
}