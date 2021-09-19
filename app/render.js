import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import HTML from './index';
import HCard from './hcard';
import { find } from './db';

//hardcoded state for testing resonse
var hCardProps = {
  givenName: 'Amit',
  surname: 'Fairfax',
  email: 'sam.fairfax@fairfaxmedia.com.au',
  phone: '0292822833',
  houseNumber: '100',
  street: 'Harris Street',
  suburb: 'Pyrmont',
  state: 'NSW',
  postcode: '2009',
  country: 'Australia'
};


// export default (req, res) => {
//   console.log("HTML  ::", HTML)
//   const content = renderToString(
//     <HTML universalState={hCardProps}>
//       <HCard {...hCardProps} />
//     </HTML>
//   );
//   return (res.write(content))

// }




export default (req, res) => (
  Promise.resolve().then(() => (
    req.cookies.user ? find(req.cookies.user) : Promise.resolve({})
  ))
    .then(state => {
      const content = renderToString(
        <HTML universalState={hCardProps}>
          <HCard {...hCardProps} />
        </HTML>
      );
      res.write(content);
      res.end();
    })
    .catch(() => {
      res.end();
    })
)