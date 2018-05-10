import React from 'react';
import { Store } from './index';

const WithStore = Comp => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      Store.populateFromProps(props);
    }

    render() {
      return <Comp {...this.props} />;
    }
  };
};

export default WithStore;
