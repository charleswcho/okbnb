class CreateOffers < ActiveRecord::Migration
  def change
    create_table :offers do |t|
      t.integer :profile_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :offers, [:profile_id, :user_id], :unique => true
  end
end
