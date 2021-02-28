require 'sidekiq/web'
Sidekiq::Web.set :session_secret, Rails.application.secrets[:secret_key_base]


Rails.application.routes.draw do
  get "/pages/*id" => 'pages#show', as: :page, format: false

  root to: 'home#index'

  resources :home
  resources :users
  resources :user_sessions
  get 'login' => 'user_sessions#new', :as => :login
  post 'logout' => 'user_sessions#destroy', :as => :logout

  resources :political_parties

end
