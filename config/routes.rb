Rails.application.routes.draw do
  devise_for :authors, :controllers => { :omniauth_callbacks => "authors/omniauth" }
  resources :posts do
    resources :comments
  end
  get '*other', to: redirect('/')
end
