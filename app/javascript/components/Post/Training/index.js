import React, { Component } from "react";
import { graphql } from "react-apollo";
import { FETCH_TRAINING_DETAILS } from "../queries";
import MDSpinner from "react-md-spinner";

const R = require('ramda');

class TrainingDetails extends Component {

  render() {
    if(this.props.data.loading) {
      return(
        <div className="text-center">
          <MDSpinner singleColor="#03a9f4" />
        </div>
      );
    }

    const { test_count, example_count } = this.props.data.trainingDetails;

    return(
      <div className="container">
        <h1>{test_count}</h1>
        <h1>{example_count}</h1>
      </div>
    );
  }
}


export default graphql(FETCH_TRAINING_DETAILS)(TrainingDetails);
