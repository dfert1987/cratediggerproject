Rails.application.routes.draw do
  resources :artists
  resources :famous_artists
  resources :countries
  resources :users
  post "login", to: "authentication#login"
  resources :catalog, only: [:index]
end
