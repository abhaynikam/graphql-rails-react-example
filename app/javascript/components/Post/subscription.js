import gql from "graphql-tag";

const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postId: ID!) {
    commentAdded(postId: $postId) {
      id
      content
      created_at
      likes
      user {
        id
        first_name
      }
    }
  }
`;

export { COMMENTS_SUBSCRIPTION };
