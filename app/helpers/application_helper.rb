# frozen_string_literal: true

module ApplicationHelper
  def super_admin_signed_in?
    user_signed_in? && current_user.super_admin?
  end

  def nav_link(text, path, condition = false, options = {})
    class_name = (current_page?(path) || condition) ? "active" : ""

    content_tag(:li, class: class_name) do
      options[:title] = text unless options.has_key?(:title)
      link_to text, path, options
    end
  end

  def get_current_user_token
    {
      email: current_user.email,
      token: current_user.authentication_token
    }
  end
end
