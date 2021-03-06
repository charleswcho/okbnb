class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in_user!(@user)
      render json: current_user
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:password, :email)
  end
end
