Rails.application.routes.draw do

  namespace :api do
    resources :users
    resources :arts
    get '/arts', to: 'arts#index'
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
