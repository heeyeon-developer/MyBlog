import express from 'express'

const app = express()

//처음 들어온 신호를 모두 받아들이기
app.get('/')

export default app;