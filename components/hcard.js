/* 
 * re-export the component with React in the global scope.
 */
import React from 'react';

global.React = React;
export default require('../static/main').default;
