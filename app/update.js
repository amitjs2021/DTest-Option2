import { update } from './db';

export default (req, res) => {
  update(req.cookies.user, req.body).then(({ id }) => {
    res.cookie('user', id);
    res.end();
  });
};
