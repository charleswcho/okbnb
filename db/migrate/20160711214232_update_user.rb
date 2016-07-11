class UpdateUser < ActiveRecord::Migration
  def change
    add_column :users, :profile_id, :integer
    add_index :users, :profile_id, unique: true
  end
end
