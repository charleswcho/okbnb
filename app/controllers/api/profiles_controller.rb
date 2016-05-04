class Api::ProfilesController < ApplicationController

  def index
    @profiles = Profile.all

    if (bounds)
      @profiles = @profiles.in_bounds(bounds)
    end

    if (search_status)
      @profiles = @profiles.search_status(search_status)
    end

    if (smoker)
      @profiles = @profiles.smoker(params[:smoker])
    end

    if (diet)
      @profiles = @profiles.diet(diet)
    end

    if (pet)
      @profiles = @profiles.pet(pet)
    end

    if (budget)
      @profiles = @profiles.budget(budget)
    end

    render :index
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
  def bounds
    params[:bounds]
  end

  def search_status
    params[:search_status]
  end

  def smoker
    params.key?(:smoker)
  end

  def diet
    params[:diet]
  end

  def pet
    params[:pet]
  end

  def budget
    params[:budget]
  end

  def profile_params
    params.require(:profile).permit(
      :user_id,
      :profilePicURL,
      :name,
      :age,
      :description,
      :location,
      :lat,
      :lng,
      :diet,
      :search_status,
      :smoker,
      :pet,
      :budget,
    )
  end
end
