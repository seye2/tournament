# 토너먼트

html url : https://s3.ap-northeast-2.amazonaws.com/seye2/tournament/index.html

## 서버
- static file server : s3

## 설치
- git clone을 하여 레파지토리 복사

```
    $ yarn install //폴더에 node_module설치
    $ yarn start //webpack-dev-server 실행
    $ yarn build //webpack build
```

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

## 구조 설명

<img src="https://s3.ap-northeast-2.amazonaws.com/seye2/tournament/1.png" width="600" height="400" />

1. “app.js”에서 store의 객체를 생성한다.
2. ”app.js”에서 모델과 뷰를 연결해주는 “controller.js”를 호출하면서 뷰에 생성한 모델 객체를 같이 전달한다.
3. “controller.js＂에서 view를 호출한다.
4. ”tournament.js”의 템플릿은 ”utility.js”에 있는 html 특수문자 처리를 해주는 함수를 호출하여 순수 html를 return 한다.
5. “view.js”는 해당 template “tournament.js”를 호출하여 선택한 템플릿을 호출한다.
6. DOMContentLoaded가 완료되면 이상형 선택 및 이전, 다음 이벤트에 따라 “manageState.js”를 이용하여 store 데이터를 추가/수정 한다.
7. 추가/수정된 데이터를 “store.js”에 저장한다.
8. 변경된 모델에 따라 화면을 그린다.(2번부터 다시 실행한다.)

## 다음,이전 버튼 선택시 데이터 흐름

<img src="https://s3.ap-northeast-2.amazonaws.com/seye2/tournament/2.png" width="600" height="400" />

1. 선택된 데이터를 “NewStore”에 저장
2. “ManageState”에서 ”HistoryStore”에 저장된 데이터를 “Store”와 비교
3. 선택된 데이터를 저장한 ”NewStore”에 있는 데이터와 Store에 있는 데이터를 이름으로 비교 중복된 내용을 걸러낸다.
4. 비교하여 “HistoryStore”에 있는 내용을 Store에서 제외 중복 처리를 위해
5. ”Store”에서 중복 처리된 데이터 중 선택된, 선택되지 않았지만 노출된 데이터를 ”HistoryStore”에 저장
6. “HistoryStore”를 최종 트리 화면에 노출

<img src="https://s3.ap-northeast-2.amazonaws.com/seye2/tournament/3.png" width="600" height="400" />

1. ”HistoryStore”에 저장된 최신 데이터를 “ManageState”에서 처리해서 “HistoryStore”를 화면에서 출력

## 기타
### SCSS
 - CSS모듈화가 편리한 이점을 이용하기 위해서 SCSS를 사용
### Webpack
- SCSS컴파일과 소스 번들링은 Webpack을 이용
 - entry point는 소스의 메인 진입점인 “app.js”와 css로 컴파일 할 ”tournament.scss” 두 파일로 구성 - loader는 es2015를 사용하기 위해 ＂babel-loader”를 사용
 - scss를 빌드해서 css로 extract하기 위해 “sass-loader, style-loader, css-loader”를 사용
 - local에서 테스트하기 위한 webpack-dev-server 설정

### 참고 자료

#### webpack
https://github.com/FEDevelopers/tech.description/wiki/(ES6)-webpack%EA%B3%BC-Babel%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-ES6-%EA%B0%84%EB%8B%A8%ED%95%9C-%EC%82%AC%EC%9A%A9%ED%99%98%EA%B2%BD-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0

http://webframeworks.kr/tutorials/translate/webpack-the-confusing-parts/


#### es6 template
http://2ality.com/2015/01/template-strings-html.html

