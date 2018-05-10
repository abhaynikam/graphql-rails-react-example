# frozen_string_literal: true

class Queries::Authors::AuthorList < GraphQL::Function
  description "List of all the authors"

  type types[Types::AuthorType]

  def call(_obj, _args, _ctx)
    Author.all
  end
end
