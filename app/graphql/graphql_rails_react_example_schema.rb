# frozen_string_literal: true

require "graphql/batch"

GraphqlRailsReactExampleSchema = GraphQL::Schema.define do

  use GraphQL::Backtrace
  use GraphQL::Subscriptions::ActionCableSubscriptions
  use GraphQL::Batch

  mutation(Types::MutationType)
  query(Types::QueryType)
  subscription(Types::SubscriptionType)

  query_analyzer(Graphql::QueryAnalyzer.new)

  instrument(:query, Graphql::QueryTimerInstrumentation)
end

log_query_complexity = GraphQL::Analysis::QueryComplexity.new do |query, complexity|
  Rails.logger.info("[QUERY COMPLEXITY] >>> #{complexity}")
end

log_query_depth = GraphQL::Analysis::QueryDepth.new do |query, depth|
  Rails.logger.info("[QUERY DEPTH] >>> #{depth}")
end

GraphqlRailsReactExampleSchema.query_analyzers << log_query_complexity
GraphqlRailsReactExampleSchema.query_analyzers << log_query_depth

GraphqlRailsReactExampleSchema.middleware << GraphQL::Schema::TimeoutMiddleware.new(max_seconds: 3) do |err, query|
  Rails.logger.info("GraphQL TIMEOUT >>> #{err}")
end
