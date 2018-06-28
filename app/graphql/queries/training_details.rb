# frozen_string_literal: true

class Queries::TrainingDetails < GraphQL::Function
  description "List of all the posts"

  type Types::TrainingType

  def call(_obj, _args, _ctx)
    {}
  end
end
