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

require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
