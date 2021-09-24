import express from "express";
import fs from "fs";
import path from "path";
import cookieParser from 'cookie-parser';

// only for initial testing used here 
import React from "react";
import ReactDOMServer from "react-dom/server";

//testing code here 
import App from "../src/App";
import HCard from '../app/hcard'

// react SSR code from here 
import render from '../app/render.js'
import submit from '../app/submit'
import update from '../app/update'


const PORT = 8000;

const app = express();
app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By");
  next();
});
app.use(cookieParser());
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


app.use(express.static('static', { index: false }));
app.use("/submit", submit)
app.use('/update', update)
app.use('/', render)

app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});
