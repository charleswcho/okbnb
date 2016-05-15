class Api::OffersController < ApplicationController
  def show
    @offer = User.find_by(profile_id: params[:profile_id])

    if (@offer)
      render json: @offer
    else
      render json: @offer.errors.full_messages, status: 400
    end
  end
end
