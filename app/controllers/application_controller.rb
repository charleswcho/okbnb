class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  # Expose current_user method to the views
  helper_method :current_user
  helper_method :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def signed_in?
    !current_user.nil?
  end

  def sign_in_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def sign_out_user!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_user!
    render json: ["Sign in required"] unless logged_in?
  end
end
