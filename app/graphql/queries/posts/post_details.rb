# frozen_string_literal: true

class Queries::Posts::PostDetails < GraphQL::Function
  argument :id, !types.ID

  description "Details of the post"

  type Types::PostType

  def call(_obj, args, _ctx)
    Post.find_by!(id: args[:id])
  end
end
