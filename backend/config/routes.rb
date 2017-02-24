Rails.application.routes.draw do

  get "heroes/search" => "heroes#search"
  resources :heroes
end
