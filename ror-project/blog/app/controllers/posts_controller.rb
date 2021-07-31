class PostsController < ApplicationController
    def index
        puts ">>>>>> Posts Controller index!"
        @posts = Post.all.order('created_at DESC')
    end

    def show
        @post = Post.find(params[:id])
    end

    def new
        puts ">>>>>> Posts Controller new!"
    end

    def create
        puts ">>>>>> Posts Controller create!"
        # render json: params[:post]
        @post = Post.new(post_params)
        @post.save
        redirect_to @post
    end

    private
        # Prevent mass-assign
        def post_params
            params.require(:post).permit(:title, :text)
        end
end
