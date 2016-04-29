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
#  age           :string           not null
#  lat           :float            not null
#  lng           :float            not null
#

class Profile < ActiveRecord::Base
  validates :user_id, :profilePicURL, :name, :description,
            :location, :lat, :lng, :pet, :budget, presence: true
  validates :smoker, inclusion: { in: [true, false] }
  validates :pet, inclusion: { in: ["Cat", "Dog", "Bird", "Fish"] }

  belongs_to :user

  def self.in_bounds(bounds)
   self.where("lat < ?", bounds[:northEast][:lat])
       .where("lat > ?", bounds[:southWest][:lat])
       .where("lng > ?", bounds[:southWest][:lng])
       .where("lng < ?", bounds[:northEast][:lng])
 end
end
