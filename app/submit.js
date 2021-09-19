import { save } from './db';

export default (req, res) => {
  save(req.cookies.user, req.body).then(({ id }) => {
    res.cookie('user', id);
    res.redirect('/');
  });
};
