# frozen_string_literal: true

class Mutations::Comments::IncrementCommentLikes < GraphQL::Function
  argument :id, types.ID, "Comment identifier"

  type Types::CommentType

  def call(_obj, args, _ctx)
    Comment.find_by!(id: args[:id]).increment!(:likes)
  end
end
