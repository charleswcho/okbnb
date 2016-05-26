require 'byebug'

class UserMailer < ApplicationMailer
  def offer_notification_email(sender, receiver)
    @sender = sender
    @receiver = receiver
    mail(from: sender.email, to: receiver.email, subject: 'This is a new email')
  end
end
