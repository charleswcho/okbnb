class Api::OffersController < ApplicationController
  def show
    @profile = Profile.find(params[:id])
    if (@profile)
      @offers = @profile.offers
      render :index
    else
      render json: @profile.errors.full_messages, status: 400
    end
  end
end
