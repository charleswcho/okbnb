class AddAge < ActiveRecord::Migration
  def change
    add_column :profiles, :age, :string, null: false
  end
end
