# frozen_string_literal: true

require "graphql/batch"

Types::TrainingType = GraphQL::ObjectType.define do

  name "TrainingType"

  field :test_count, types.Int do

    resolve -> (obj, _args, _ctx) { 10 }
  end

  field :example_count, types.Int do

    resolve -> (obj, _args, _ctx) { 20 }
  end
end
