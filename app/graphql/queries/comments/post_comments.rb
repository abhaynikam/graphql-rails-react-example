# frozen_string_literal: true

class Queries::Comments::PostComments < GraphQL::Function
  type types[Types::CommentType]

  argument :post_id, !types.ID


  def call(_obj, args, _ctx)
    post = Post.find_by!(id: args[:post_id])

    post.comments
  end
end
