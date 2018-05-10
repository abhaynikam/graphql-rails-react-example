# frozen_string_literal: true

class Mutations::Comments::CreateComment < GraphQL::Function
  type Types::CommentType

  argument :comment, InputObjectTypes::CommentInputType

  def call(_obj, args, _ctx)
    comment = Comment.create! args[:comment].to_h
    GraphqlRailsReactExampleSchema.subscriptions.trigger("commentAdded", { postId: comment.post.id }, comment)
    comment
  end
end
