import React from "react";
import { ApolloClient } from 'apollo-client';
import { ApolloProvider, createNetworkInterface } from "react-apollo";
import PostIndex from "./Post/Index";
import NewPost from "./Post/New";
import PostDetails from "./Post/Show";
import ContactUs from "./ContactUs/New"
import NoMatch from "./NoMatch";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import WithStore from "./store/WithStoreHoc";
import { Store } from "./store";
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";
import { HttpLink } from "apollo-link-http";
import { ApolloLink, concat } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import TrainingDetails from "./Post/Training";

const cable = ActionCable.createConsumer()

const httpLink = new HttpLink({ uri: '/graphql', credentials: 'include' });

const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription'
  )
}

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({ headers: Store.headers });
  return forward(operation);
})

const link = ApolloLink.split(
  hasSubscriptionOperation,
  new ActionCableLink({cable}),
  httpLink
);

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  dataIdFromObject: object => object.id,
  cache: new InMemoryCache()
});

class MainApp extends React.Component {

  render() {
    return(
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Switch>
              <Route path="/" component={PostIndex} exact />
              <Route path="/posts/new" render={ routeProps => <NewPost {...routeProps} authorId={this.props.currentUserId} /> } exact />
              <Route path="/posts/:id" render={ routeProps => <TrainingDetails {...routeProps} currentUserId={this.props.currentUserId} /> } exact />
              <Route path="/pages/contact_us" render={ routeProps => <ContactUs {...routeProps} currentUserId={this.props.currentUserId} /> } exact />

              <Route path="*" component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default WithStore(MainApp);
