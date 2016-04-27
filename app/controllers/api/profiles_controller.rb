class Api::ProfilesController < ApplicationController

  def index
    @profiles = Profile.all
    render :index
    # TODO: Need to create filtering logic based on parameters that are set by the user.  Have to create custom ActiveRecord queries
  end

  def show
    @profile = Profile.find(params[:id])
    render json: @profile
  end

  def create
    @profile = Profile.new(profile_params)
    if @profile.save
      render json: @profile
    else
      render json: @profile.errors.full_messages, status: 400
    end
  end

  private

  def profile_params
    params.require(:profile).permit(
      :user_id,
      :profilePicURL,
      :name,
      :description,
      :location,
      :diet,
      :smoker,
      :pet,
      :budget
    )
  end

  # TODO: Private methods shoule dry out the filter logic
end
