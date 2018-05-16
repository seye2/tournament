# 배너

html url : https://mgzx9tab56.execute-api.ap-northeast-2.amazonaws.com/prod/html

api url : https://mgzx9tab56.execute-api.ap-northeast-2.amazonaws.com/prod/banners?device=desktop&count=3

## 서버 구성도
- api server : lambda
- web server : lambda
- router : api gateway
- static file server : s3


![aws](https://s3.ap-northeast-2.amazonaws.com/seye2/image/aws.001.png)


## 폴더구조
    banner
        ├── api                         #banner api
        ├── functions                   #apex lambda function
            ├── apiMainBanner               #api apex folder
            ├── htmlBanner                  #html apex folder
        ├── front
            ├── build                   # webpack build 후 파일 파일 생성할 저장 폴더
                ├── bundle.js               # bundling js files
                ├── index.html              # html
                ├── main.css                # css
            ├── config                  # api url, browser size, banner count설정
            ├── controller              # model과 뷰를 연결해주는 역활
            ├── html                    # html
            ├── js                      # app.js, utility, ui관련 js
                ├── app.js                  # DOMContentLoaded,resize등 페이지 로딩 후 실행될 로직 포함
                ├── carousel.js             # banner carousel 구현 플러그인
                ├── mobile.js               # mobile기기 인지 아닌지 useragent로 구분하는 플러그인
                ├── utility.js              # browser size, check mobile browser, html escape등 utility
            ├── model                   # ajax를 통하여 데이터를 관리하는 역활
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
    banner$ curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh //apex 설치
    banner$ npm run install //banner, front폴더에 node_module설치
    banner$ npm run start //webpack-dev-server 실행
    banner$ npm run deploy //webpack build후 lambda,s3배포
```

**webpack-dev-server실행 후 크롬 브라우져에서는 cors이슈 때문에
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=ko
크롬 익스텐션 설치 후 cors를 활성화 시켜주어야한다.

### 참고 자료

#### lambda + api gateway
http://gun0912.tistory.com/59

http://docs.aws.amazon.com/lambda/latest/dg/welcome.html

http://gun0912.tistory.com/63

http://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html


#### webpack
https://github.com/FEDevelopers/tech.description/wiki/(ES6)-webpack%EA%B3%BC-Babel%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-ES6-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%82%AC%EC%9A%A9%ED%99%98%EA%B2%BD-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0

http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/


#### es6 template
http://2ality.com/2015/01/template-strings-html.html

