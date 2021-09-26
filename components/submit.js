import { save } from './db';

console.log("submit -------- called :::")
export default (req, res) => {
  // console.log("req :: ", req)
  // console.log("req.body  :", req.body)

  save(req.sessionID, req.body).then(({ id }) => {
    res.cookie('user', id);
    res.redirect('/');
  });
};
