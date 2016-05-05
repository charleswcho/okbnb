class FixIdAge < ActiveRecord::Migration
  def change
    remove_column :profiles, :user_id
    remove_column :profiles, :age
    add_column :profiles, :user_id, :integer, null: false
    add_column :profiles, :age, :integer, null: false
  end
end
