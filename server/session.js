const express = require('express');
// const cookieParser = require('cookie-parser');
const session = require("express-session")

const app = express();
const PORT = 3000;


// app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.use(session({
    secret: 'mySecrete',
    cookie: { maxAge: 30000 },
    saveUninitialized: true,

}))

// function validateCookie(req, res, next) {
//     const { cookies } = req;
//     console.log(cookies);
//     next()
// }

// app.get("/test", validateCookie, (req, res) => {
//     console.log(" num ", (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2))
//     res.cookie('session ID', '12345')
//     res.status(200).json({ msg: "session set" })
// })


app.post('/save', (req, res) => {

    console.log("hello from post ::: ", req.sessionID)
    console.log(req.body)
    res.send(req.sessionID)

})

app.listen(PORT, () => {
    console.log("serer runngin http://localhost:3000")
})