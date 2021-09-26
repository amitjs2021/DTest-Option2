import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import HTMLDocument from 'react-html-document';
import HCard from './hcard';
import { find } from './db';

//hardcoded state for testing response
// var hCardProps = {
//   givenName: 'Amit',
//   surname: 'Fairfax',
//   email: 'sam.fairfax@fairfaxmedia.com.au',
//   phone: '0292822833',
//   houseNumber: '100',
//   street: 'Harris Street',
//   suburb: 'Pyrmont',
//   state: 'NSW',
//   postcode: '2009',
//   country: 'Australia'
// };


export default (req, res) => {
  console.log("req.session :: ", req.sessionID)
  return (
    find(req.sessionID)
      .then(state => {
        const content = renderToStaticMarkup(
          <HTMLDocument
            title="VCard-test"
            scripts={['/app.js']}
            stylesheets={['/css/bootstrap.min.css', '/css/main.css']}
            universalState={state}
          >
            <HCard {...state} />
          </HTMLDocument>
        );
        res.write(content);
        res.end();
      })
      .catch(() => {
        res.end();
      })
  )
}