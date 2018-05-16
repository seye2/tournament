/*
 [Multer 초기화]
 웹 서버에서 파일 업로드 버퍼를 처리하되 물리적으로 파일을 저장하지 않기 위해 메모리 스토리지 타입의 객체를 생성합니다.
 웹 서버에 물리적으로 저장하는 것보다 아마존 S3 등을 이용하는 것이 좋은 이유는,
 로드 밸런서 등을 활용하여 여러 웹 서버가 같은 Node.js 웹 서비스를 제공할 때 특정 서버만 파일을 보유하게 되는 현상 등이 생기는 것을 미연에 방지할 수 있기 때문입니다.
 필요할 경우 메모리 스토리지 대신 다른 스토리지를 써도 됩니다.
 */
const fs = require('fs')
const aws = require('aws-sdk')

let fileObj="./functions/htmlBanner/build/bundle.js"

//아마존 S3에 저장하려면 먼저 설정을 업데이트합니다.
aws.config.region = 'ap-northeast-2'; //Seoul
aws.config.update({
    accessKeyId: "",
    secretAccessKey: ""
});


var s3js = new aws.S3({ params: { Bucket: 'seye2', Key: 'js/bundle.js', ACL: 'public-read',ContentType:'text/javascript' }});

s3js.upload({ Body: fs.createReadStream('./front/build/bundle.js') }, function(err, data) {
    if (err) {
        console.log('err' + err);
        // context.done(null, result);
    } else {
        console.log('successfully upload ');
    }
});

var s3css = new aws.S3({ params: { Bucket: 'seye2', Key: 'js/main.css', ACL: 'public-read',ContentType:'text/css' }});

s3css.upload({ Body: fs.createReadStream('./front/build/main.css') }, function(err, data) {
    if (err) {
        console.log('err' + err);
        // context.done(null, result);
    } else {
        console.log('successfully upload ');

    }
});