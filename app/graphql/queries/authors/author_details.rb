# frozen_string_literal: true

class Queries::Authors::AuthorDetails < GraphQL::Function
  description "Author one"

  argument :id, types.ID, "Primary key to find the author."

  type Types::AuthorType

  def call(obj, args, ctx)
    Author.find_by!(id: args[:id])
  end
end
