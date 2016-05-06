class RemoveUsernameAddEmail < ActiveRecord::Migration
  def change
    remove_column :users, :username
    add_column :users, :email, :string
    add_index :users, :email, unique: true
  end
end
