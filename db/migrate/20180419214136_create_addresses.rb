class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses, id: :uuid, default: "uuid_generate_v4()", force: true do |t|
      t.string :address_one, null: false
      t.string :address_two
      t.string :city, null: false
      t.string :state_region, null: false
      t.string :country, null: false
      t.string :postal_code, null: false
      t.uuid :person_id, null: false

      t.timestamps null: false
    end

    add_index :addresses, :person_id
  end
end
