# == Schema Information
#
# Table name: profiles
#
#  id            :integer          not null, primary key
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
#  lat           :float            not null
#  lng           :float            not null
#  search_status :string           not null
#  user_id       :integer          not null
#  age           :integer          not null
#

class Profile < ActiveRecord::Base
  validates :user_id, :profilePicURL, :name, :age, :description,
            :location, :search_status, :smoker, :diet, :pet, :budget, presence: true
  # validates :search_status, inclusion: { in: ["Active", "Passive", "Don't contact"] }
  # validates :smoker, inclusion: { in: [true, false] }
  # validates :diet, inclusion: { in: ["Vege", "Vegan", "Gluten", "Other"] }
  # validates :pet, inclusion: { in: ["Cat", "Dog", "Bird", "Other"] }
  validates :user_id, uniqueness: { message: 'can only have one profile'}
  belongs_to :user
  has_many :offers

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
  end

  def self.search_status(search_status)
    self.where(search_status: search_status)
  end

  def self.smoker(smoker)
    self.where(smoker: smoker)
  end

  def self.diet(diet)
    self.where(diet: diet)
  end

  def self.pet(pet)
    self.where(pet: pet)
  end

  def self.budget(budget)
    if (budget[:max])
      self.where("budget > ?", budget[:min])
          .where("budget < ?", budget[:max])
    else
      self.where("budget > ?", budget[:min])
    end
  end
end
