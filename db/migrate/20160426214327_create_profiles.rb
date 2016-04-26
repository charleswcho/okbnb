class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :user_id, index: true, null: false
      t.string :profilePicURL, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.string :location, null: false
      t.string :diet, null: false
      t.boolean :smoker, null: false
      t.string :pet, null: false
      t.integer :budget, null: false

      t.timestamps null: false
    end
  end
end
