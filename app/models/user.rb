# == Schema Information
#
# Table name: users
#
#  id                 :uuid             not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  email              :string           not null
#  encrypted_password :string(128)      not null
#  confirmation_token :string(128)
#  remember_token     :string(128)      not null
#  locked_at          :datetime
#  last_sign_in_ip    :inet
#  last_sign_in_at    :datetime
#  person_id          :uuid
#

class User < ApplicationRecord
  include Clearance::User

  belongs_to :person

  def secure_copy
    copy = self.clone
    copy.confirmation_token = nil
    copy.encrypted_password = nil
    copy.remember_token = nil
    copy
  end
end
