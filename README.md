# 토너먼트

html url : https://s3.ap-northeast-2.amazonaws.com/seye2/tournament/index.html

## 서버
- static file server : s3


## 폴더구조
    tournament
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
        └── webpack.config.js           #config webpack


## 설치
- git clone을 하여 레파지토리 복사

```
    $ yarn install //폴더에 node_module설치
    $ yarn start //webpack-dev-server 실행
    $ yarn build //webpack build
```

### 참고 자료

#### webpack
https://github.com/FEDevelopers/tech.description/wiki/(ES6)-webpack%EA%B3%BC-Babel%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-ES6-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%82%AC%EC%9A%A9%ED%99%98%EA%B2%BD-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0

http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/


#### es6 template
http://2ality.com/2015/01/template-strings-html.html

