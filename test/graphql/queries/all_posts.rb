# frozen_string_literal: true

require "test_helper"

class AllPostsTest < ActiveSupport::TestCase
  def test_all_posts_query_success
    query = %|
      {
        all_posts {
          id
        }
      }
    |
    result = GraphqlRailsReactExampleSchema.execute(query)

    assert result["data"]["all_posts"]
    assert result["data"]["all_posts"]
  end
end
