class PostsController < ApplicationController
    # Desativa a verificação CSRF apenas para a ação `create`
    skip_before_action :verify_authenticity_token, only: [:create]
  
    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def post_params
      params.require(:post).permit(:title, :content, :published_at)
    end
  end
  