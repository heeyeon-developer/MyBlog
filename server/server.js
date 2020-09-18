import app from './app'
//서버가 포트 7000번에서 듣고 있는다
app.listen('7000',() => {
    console.log('hi');
})