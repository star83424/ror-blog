Rails.application.routes.draw do
  devise_for :authors, :controllers => { :omniauth_callbacks => "authors/omniauth" }
  resources :posts do
    resources :comments
  end
  # root "posts#index"
  # get "*other", to: ""
end
