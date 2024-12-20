Rails.application.routes.draw do
  # Rota para verificar o status da aplicação (saúde)
  get "up" => "rails/health#show", as: :rails_health_check

  # Rota para os arquivos PWA
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Definição da API para Posts (ajustado)
  namespace :api do
    resources :posts
  end

  # Define o root path para a página inicial
  root "posts#index"
end