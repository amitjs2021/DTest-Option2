import React from 'react';
import HTMLDocument from 'react-html-document';

export default ({ children, ...props }) => (
  <HTMLDocument
    title="VCard-test"
    scripts={['/app.js']}
    stylesheets={['../css/bootstrap.min.css', '../css/main.css']}
    {...props}
  >
    {children}
  </HTMLDocument>
);
