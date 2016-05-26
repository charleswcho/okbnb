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

  def update
    @profile = Profile.find(params[:id])
    if @profile.update(profile_params)
      render json: @profile
    else
      render json: @profile.errors.full_messages, status: 400
    end
  end

  def destroy
    @profile = Profile.find(params[:id])
    if @profile.destroy
      render json: @profile
    else
      render json: @profile.errors.full_messages, status: 400
    end
  end

  def contact
    @offer = Offer.create({
      profile_id: params[:profile_id].to_i,
      user_id: params[:user_id].to_i
    })

    @user = Profile.find(params[:profile_id]).user
    debugger
    UserMailer.offer_notification_email(current_user, @user).deliver_now
    render json: @user
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
