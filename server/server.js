import app from './app'
import config from './config/index'

const { PORT } = config
//서버가 포트 7000번에서 듣고 있는다
app.listen(PORT,() => {
    console.log(`server started on Port ${PORT}`);
})