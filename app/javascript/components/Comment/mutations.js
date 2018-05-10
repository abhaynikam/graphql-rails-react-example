import gql from "graphql-tag";

const CREATE_COMMENT = gql`
  mutation CreateComment($comment: CommentInputType) {
    createComment(comment: $comment) {
      id
      content
    }
  }
`;

const INCREMENT_COMMENT_LIKES = gql`
  mutation IncrementCommentLikes($id: ID) {
    comment: incrementCommentLikes(id: $id) {
      id
      content
      likes
    }
  }
`;

export { CREATE_COMMENT, INCREMENT_COMMENT_LIKES };
