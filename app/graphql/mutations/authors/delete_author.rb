# frozen_string_literal: true

class Mutations::Authors::DeleteAuthor < GraphQL::Function
  argument :id, !types.ID

  type types.Boolean

  def call(_obj, args, _ctx)
    author = Author.find_by!(id: args[:id])
    !!author.destroy
  end
end
