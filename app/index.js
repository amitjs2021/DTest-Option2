import React from 'react';
import HTMLDocument from 'react-html-document';

export default ({ children, ...props }) => (
  <HTMLDocument
    title="VCard-test"
    scripts={['/app.js']}
    stylesheets={['/static/css/bootstrap.min.css', '/static/css/main.css']}
    {...props}
  >
    {children}
  </HTMLDocument>
);
