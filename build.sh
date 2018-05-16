#!/bin/sh

cd front
npm run build
cd ..

rm -rf functions/apiBanner/*
rm -rf functions/htmlBanner/*

cp api/index.js functions/apiMainBanner

cp front/index.js functions/htmlBanner
cp -R front/build functions/htmlBanner

node s3-upload.js

cp api/function.json functions/apiMainBanner
cp front/function.json functions/htmlBanner

apex deploy

