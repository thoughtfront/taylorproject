# == Schema Information
#
# Table name: addresses
#
#  id           :uuid             not null, primary key
#  address_one  :string           not null
#  address_two  :string
#  city         :string           not null
#  state_region :string           not null
#  country      :string           not null
#  postal_code  :string           not null
#  person_id    :uuid             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryBot.define do
  factory :address do
    
  end
end
