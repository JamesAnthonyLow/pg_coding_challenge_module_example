import React from 'react';
import policies from './policies';

export default class App extends React.Component {
  render() {
    return <pre>{ JSON.stringify(policies, null, "\t") }</pre>;
  }
}
