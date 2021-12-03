Rails.application.routes.draw do

  namespace :api do
    
    get '/arts', to: 'arts#index'
    
    resources :users, only: [:index, :create, :show, :update, :destroy]
    resources :arts, only: [:index, :show, :create]

  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
