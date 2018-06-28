# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :author

  has_many :comments, dependent: :destroy

  scope :filter_by_title, ->(query) { where("LOWER(title) like LOWER(?)", "%#{query}%") }
end
