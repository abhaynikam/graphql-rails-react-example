# frozen_string_literal: true

GraphqlRailsReactExampleSchema = GraphQL::Schema.define do

  use GraphQL::Backtrace
  use GraphQL::Subscriptions::ActionCableSubscriptions

  mutation(Types::MutationType)
  query(Types::QueryType)
  subscription(Types::SubscriptionType)
end
