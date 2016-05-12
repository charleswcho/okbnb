# == Schema Information
#
# Table name: offers
#
#  id         :integer          not null, primary key
#  profile_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Offer < ActiveRecord::Base
  validates :profile_id, :user_id, presence: true
  validates_uniqueness_of :profile_id, :scope => :user_id

  belongs_to :profile
  belongs_to :user 
end
