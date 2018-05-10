# frozen_string_literal: true

class Mutations::Posts::DeletePost < GraphQL::Function
  type types.Boolean

  argument :id, types.ID

  def call(_obj, args, _ctx)
    post = Post.find_by!(id: args[:id])
    !!post.destroy
  end
end
