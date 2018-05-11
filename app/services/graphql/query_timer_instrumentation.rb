# frozen_string_literal: true

module Graphql::QueryTimerInstrumentation
  module_function

  # Log the time of the query
  def before_query(query)
    Rails.logger.info("[QUERY BEGIN] >>> #{Time.now.to_i}")
  end

  def after_query(query)
    Rails.logger.info("[QUERY END] >>> #{Time.now.to_i}")
  end
end
