# == Schema Information
#
# Table name: people
#
#  id                  :uuid             not null, primary key
#  prefix              :string
#  first_name          :string
#  middle_name         :string
#  last_name           :string
#  suffix              :string
#  gender              :string
#  birth_date          :date
#  facebook_id         :string
#  facebook_link       :string
#  twitter_id          :string
#  twitter_screen_name :string
#  instagram_id        :string
#  instagram_username  :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Person < ApplicationRecord

  has_one :user
  has_many :addresses

end
