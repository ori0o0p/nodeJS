import mongoose from 'mongoose'

mongoose.connect()
        .then(() => console.log('db 연결 완료'))
        .catch(e => {
            console.log('db 연결 실패')
            console.log(e)
        })