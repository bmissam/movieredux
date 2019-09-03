import React from 'react';
import { Spinner } from 'reactstrap';

export default class Spin extends React.Component {
  render() {
    return (
      <div className="Loader">
        <Spinner color="primary" />
      
      </div>
    );
  }
}