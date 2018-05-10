# frozen_string_literal: true

class Mutations::Posts::CreatePost < GraphQL::Function
  type Types::PostType

  argument :post, InputObjectTypes::PostInputType

  def call(_obj, args, _ctx)
    Post.create! args[:post].to_h
  end
end
