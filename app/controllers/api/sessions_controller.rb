class Api::SessionsController < ApplicationController
  def show
  end

  def create
   user = User.find_by_credentials(
     params[:user][:username],
     params[:user][:password]
   )

   if user.nil?
     render json: {error: "Invalid Credentials"}, status: 401
   else
     login_user!(user)
     render json: current_user
   end
  end

  def destroy
   logout_user! if current_user
   render json: ["Sucessfully logged out"]
  end
end
