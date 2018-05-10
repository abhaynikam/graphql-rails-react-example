# frozen_string_literal: true

class GraphqlController < ApplicationController
  # before_action :authenticate_user_using_x_auth_token
  # before_action :authenticate_user!

  def execute
    variables = ensure_hash(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      # Query context goes here, for example:
      current_user: current_user,
    }
    result = GraphqlRailsReactExampleSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  end

  private

    # Handle form data, JSON body, or a blank value
    def ensure_hash(ambiguous_param)
      case ambiguous_param
      when String
        if ambiguous_param.present?
          ensure_hash(JSON.parse(ambiguous_param))
        else
          {}
        end
      when Hash, ActionController::Parameters
        ambiguous_param
      when nil
        {}
      else
        raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
      end
    end

    def authenticate_user_using_x_auth_token
      user_email = request.headers["X-Auth-Email"]
      auth_token = request.headers["X-Auth-Token"].presence

      user = user_email && User.find_by_email(user_email)

      if user && Devise.secure_compare(user.authentication_token, auth_token)
        sign_in user, store: false
      else
        head(:unauthorized)
      end
    end
end
