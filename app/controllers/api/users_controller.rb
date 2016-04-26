require 'byebug'

class Api::UsersController < ApplicationController

  def create
    # debugger;
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render json: current_user
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :username)
  end
end
