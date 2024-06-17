Practicing react without create-react-app

npm init // package.json

//create file
README.md //describe 
.gitignore // /node_modules/

npm i parcel -D // bundler

npx parcel index.html // node test.js

//CDN

Which is best to use CDN or node package

npm i react
npm i react-dom

CDN remove

app.js
import React from "react"
import ReactDOM from "react-dom"

//Error : Browser scripts import / export 
//Solution index.html -> <script src="app.js"> => <script type="module" src="app.js">



