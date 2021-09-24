import express from "express";
import fs from "fs";
import path from "path";
import cookieParser from 'cookie-parser';
import helmet from 'helmet'

import session from 'express-session'

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

const PORT = process.env.PORT || 8000;

const app = express();

//for securing general headers
// app.use(helmet())

//creating session object - will use if require
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


app.use(cookieParser());
//for request
app.use(express.json());

// for form body 
app.use(express.urlencoded({
  extended: true
}));

//set assests on root level
app.use(express.static('static', { index: false }));
app.use("/submit", submit)
app.use('/update', update)
app.use('/', render)


app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});
