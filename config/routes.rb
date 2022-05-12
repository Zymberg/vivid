Rails.application.routes.draw do
  resources :favorites, only: [:index, :show, :create, :destroy]
  resources :listings, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :create]

end
