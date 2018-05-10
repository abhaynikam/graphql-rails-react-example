import gql from "graphql-tag";

const CREATE_POST = gql`
  mutation CreatePost($post: PostInputType) {
    createPost(post: $post) {
      title
      body
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID) {
    deletePost(id: $id)
  }
`;

export { DELETE_POST, CREATE_POST };
