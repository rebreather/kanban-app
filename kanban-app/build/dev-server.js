//Node.JS의 require을 사용해 임포트
const bodyParser = require('body-parser')

//Express 애플리케이션 인스턴스를 받는 함수를 export
module.exports = app => {
    //HTTP 요청으로 body 내용을 JSON으로 파싱하는 미들웨어 설치
    app.use(bodyParser.json())

    //TODO: 이 부분 뒤로 API 구현 추가
}