import gql from "graphql-tag";

const FETCH_POSTS = gql`
  {
    posts: all_posts {
      id
      title
    }
  }
`;

const PAGINATED_POST_LIST = gql`
  query PaginatedPostList($limit: Int!, $offset: Int!, $query: String) {
    posts: paginated_post_list(limit: $limit, offset: $offset, query: $query) {
      id
      title
    }
  }
`;

const PAGINATION_METADATA = gql`
  {
    metadata: pagination_meta_data(model_name_for_pagination_metadata:"Post") {
      total_count
    }
  }
`;

const FETCH_POST = gql `
  query FetchPost($id: ID!){
    post(id: $id) {
      id
      title
      body
      created_at
      author {
        id
        full_name
      }
    }
  }
`;

const FETCH_COMMENTS_FOR_POST = gql`
  query FetchCommentsForPost($post_id: ID!) {
    comments: post_comments(post_id: $post_id) {
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

const FETCH_TRAINING_DETAILS = gql`
  query {
    trainingDetails: training_details {
      test_count
      example_count
    }
  }
`;


export { FETCH_POSTS, FETCH_POST, PAGINATED_POST_LIST, PAGINATION_METADATA, FETCH_COMMENTS_FOR_POST, FETCH_TRAINING_DETAILS };
