Rails.application.routes.draw do

  namespace :api do
    resources :users
    resources :arts
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get "/hello", to: "application#hello_world"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
