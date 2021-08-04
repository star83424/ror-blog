Rails.application.routes.draw do
  devise_for :authors, :controllers => {:omniauth_callbacks => "authors/omniauth" }
  resources :posts do
    resources :comments
  end
  # root "posts#index"
  get "index" => redirect(path: '/')
  get "*other" => redirect(path: '/')
end
