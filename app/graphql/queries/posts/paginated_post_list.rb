# frozen_string_literal: true

class Queries::Posts::PaginatedPostList < GraphQL::Function
  description "Paginated list of all the posts"

  type types[Types::PostType]

  argument :limit, !types.Int
  argument :offset, !types.Int

  def call(_obj, args, _ctx)
    Post.all.limit(args[:limit]).offset(args[:offset])
  end
end
