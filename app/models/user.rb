# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#  profile_id      :integer
#

class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :password_digest, presence: true
  # If a password was set, we validate it meets the requirements.
  # Note the `allow_nil`.
  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )
  validates :session_token, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  has_one :profile
  has_many :offers

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
