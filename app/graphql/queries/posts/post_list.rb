# frozen_string_literal: true

class Queries::Posts::PostList < GraphQL::Function
  description "List of all the posts"

  type types[Types::PostType]

  def call(_obj, _args, _ctx)
    Post.all
  end
end
