class AddLatLng < ActiveRecord::Migration
  def change
    add_column :profiles, :lat, :float, null: false
    add_column :profiles, :lng, :float, null: false
  end
end
