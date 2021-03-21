require 'sidekiq/web'
Sidekiq::Web.set :session_secret, Rails.application.secrets[:secret_key_base]


Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get "/pages/*id" => 'pages#show', as: :page, format: false

  root to: 'home#index'

  resources :home
  resources :users
  resources :user_sessions
  get 'login' => 'user_sessions#new', :as => :login
  get 'logout' => 'user_sessions#destroy', :as => :logout
  get 'signup' => 'users#new', :as => :signup

  resources :political_parties

end
