import express from "express";
import fs from "fs";
import path from "path";
import cookieParser from 'cookie-parser';

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import HCard from '../app/hcard'
import render from '../app/render.js'
import submit from '../app/submit'
import update from '../app/update'


const PORT = 8000;

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.use('/', render)

app.use("/submit", submit)
app.use('/update', update)

app.use("^/$", (req, res, next) => {
  fs.readFile(path.resolve("./static/index.html"), "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Some error happened");
    }
    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${<HCard />}</div > `
      )
    );
  });
});

app.use(express.static(path.resolve(__dirname, '..', 'static')))

app.listen(PORT, () => {
  console.log(`App launched on http://localhost:${PORT}`);
});
