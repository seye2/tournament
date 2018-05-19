# 토너먼트

html url : https://mgzx9tab56.execute-api.ap-northeast-2.amazonaws.com/prod/html

## 서버
- static file server : s3


## 폴더구조
    banner
        ├── functions                   # apex lambda function
            ├── build                   # apex folder
        ├── front
            ├── build                   # webpack build 후 파일 파일 생성할 저장 폴더
                ├── bundle.js               # bundling js files
                ├── index.html              # html
                ├── main.css                # css
            ├── controller              # model과 view를 연결, store를 관리(처리)
            ├── html                    # html
            ├── js                      # app.js, utility, ui관련 js
                ├── app.js                  # DOMContentLoaded, next, prev버튼 호출
                ├── event.js                # next, prev 이벤트 구현
                ├── utility.js              # html escape등 utility
            ├── model                   # model
                ├── const.js                  # const변수 선언
                ├── store.js                  # store,newstore,historystore,paging store정의
            ├── scss                    # scss
            ├── template                # view단의 html template(es6 template string)
            ├── view                    # model의 데이터와 view template을 연결해주는 역활
            ├── function.json               #apex lambda 환경설정
            ├── index.js                    #lambda main function
            └── webpack.config.js           #config webpack

        ├── build.js                  # functions 람다 폴더 배포 파일 복사 및 static file(css,js) s3 upload 및 람다(apex) 배포
        ├── install.js                # front폴더 npm install, banner폴더 npm install
        └── s3-upload.js              # s3 파일 업로드

## 설치
- git clone을 하여 레파지토리 복사

```
    $ curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh //apex 설치
    $ npm run install //banner, front폴더에 node_module설치
    $ npm run start //webpack-dev-server 실행
    $ npm run deploy //webpack build후 lambda,s3배포
```

### 참고 자료

#### webpack
https://github.com/FEDevelopers/tech.description/wiki/(ES6)-webpack%EA%B3%BC-Babel%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-ES6-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%82%AC%EC%9A%A9%ED%99%98%EA%B2%BD-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0

http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/


#### es6 template
http://2ality.com/2015/01/template-strings-html.html

