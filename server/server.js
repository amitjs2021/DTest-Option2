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
import HCard from '../components/hcard'

// react SSR routes code from here 
import render from '../components/render.js'
import submit from '../components/submit'
import update from '../components/update'

const PORT = process.env.PORT || 8000;

const app = express();

//for securing general headers
app.use(helmet.hidePoweredBy());

//creating session object - will use if require
app.use(session({
  secret: 'vCard',
  cookie: { maxAge: 30000 },
  saveUninitialized: true,
}))


// app.use(cookieParser());
//for request
app.use(express.json());

// for form body 
app.use(express.urlencoded({
  extended: true
}));

//set assests on root level
app.use(express.static('static', { index: false }));

//more logical rountes give clear picture what is going on 
app.post("/submit", submit)
app.put('/update', update)
app.get('/', render)


app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});
