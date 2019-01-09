Rails.application.routes.draw do
  resources :cards
  resources :boards do
    resources :lists
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'boards#index'
end
