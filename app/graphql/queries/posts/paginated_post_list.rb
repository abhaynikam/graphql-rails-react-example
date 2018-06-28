# frozen_string_literal: true

class Queries::Posts::PaginatedPostList < GraphQL::Function
  description "Paginated list of all the posts"

  type types[Types::PostType]

  argument :limit, !types.Int
  argument :offset, !types.Int
  argument :query, types.String, default_value: nil

  def call(_obj, args, _ctx)
    Post.filter_by_title(args[:query]).limit(args[:limit]).offset(args[:offset])
  end
end
