Rails.application.routes.draw do
  resources :artists
  resources :famous_artists
  resources :countries
  resources :users, only: [:create]
  post "login", to: "authentication#login"
  resources :catalog, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
