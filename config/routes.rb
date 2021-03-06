Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :show, :destroy]

    resources :profiles, only: [:index, :show, :create, :destroy, :update, :contact] do
      collection do
        post 'contact'
      end
    end
    resources :offers, only: [:show]
  end
end
