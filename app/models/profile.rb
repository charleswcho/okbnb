# == Schema Information
#
# Table name: profiles
#
#  id            :integer          not null, primary key
#  user_id       :string           not null
#  profilePicURL :string           not null
#  name          :string           not null
#  description   :text             not null
#  location      :string           not null
#  diet          :string           not null
#  smoker        :boolean          not null
#  pet           :string           not null
#  budget        :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Profile < ActiveRecord::Base
  validates :user_id, :profilePicURL, :name, :description,
            :location, :pet, :budget, presence: true
  validates :smoker, inclusion: { in: [true, false] }
  validates :pet, inclusion: { in: ["Cat", "Dog", "Bird", "Fish"] }

  belongs_to :user
end
