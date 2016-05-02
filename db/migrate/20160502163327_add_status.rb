class AddStatus < ActiveRecord::Migration
  def change
    add_column :profiles, :search_status, :string, null: false
  end
end
