class AddColumnLikesToComment < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :likes, :integer, default: 0
  end
end
