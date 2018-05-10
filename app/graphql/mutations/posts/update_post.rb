# frozen_string_literal: true

class Mutations::Posts::UpdatePost < GraphQL::Function
  argument :id, !types.ID
  argument :post, InputObjectTypes::PostInputType

  type Types::PostType

  def call(_obj, args, _ctx)
    post = Post.find_by!(id: args[:id])
    post.update args[:post].to_h
    post
  end
end
