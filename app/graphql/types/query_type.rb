# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do

  name "Query"

  field :author, function: Queries::Authors::AuthorDetails.new
  field :all_authors, function: Queries::Authors::AuthorList.new

  field :all_posts, function: Queries::Posts::PostList.new
  field :post, function: Queries::Posts::PostDetails.new
  field :paginated_post_list, function: Queries::Posts::PaginatedPostList.new

  field :post_comments, function: Queries::Comments::PostComments.new

  field :user, Types::UserType do
    argument :id, types.ID
    description "GraphqlRailsReactExample user"

    resolve -> (_obj, args, _ctx) {
      User.find_by!(id: args[:id])
    }
  end

  field :pagination_meta_data,  Types::PaginationMetaType do
    argument :model_name_for_pagination_metadata, types.String

    description "Returns metadata for the model name passed"

    resolve -> (_obj, args, _ctx) {
      args[:model_name_for_pagination_metadata].capitalize.constantize
    }
  end
end
