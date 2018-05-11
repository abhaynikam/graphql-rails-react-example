# frozen_string_literal: true

class Graphql::QueryAnalyzer
  # Called before the visit.
  # Returns the initial value for `memo`
  def initial_value(query)
    0
  end

  # This is like the `reduce` callback.
  # The return value is passed to the next call as `memo`
  def call(memo, visit_type, irep_node)
    memo = memo + 1
    memo
  end

  # Called when we're done the whole visit.
  # The return value may be a GraphQL::AnalysisError (or an array of them).
  # Or, you can use this hook to write to a log, etc
  def final_value(memo)
    Rails.logger.info("[FINAL MEMP] >>> #{memo}")
  end
end
