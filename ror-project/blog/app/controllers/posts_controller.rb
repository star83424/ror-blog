class PostsController < ApplicationController
    before_action :authenticate_author!, except: [:index, :show]

    def index
        puts ">>>>>> Posts Controller index!"
        @posts = Post.all.order('created_at DESC')
    end

    def show
        puts ">>>>>> Posts Controller show!"
        @post = Post.find(params[:id])
    end

    def new
        puts ">>>>>> Posts Controller new!"
        @post = Post.new
    end

    def edit
        puts ">>>>>> Posts Controller edit!"
        @post = Post.find(params[:id])
        @author = current_author
    end

    def create
        puts ">>>>>> Posts Controller create!"
        # render json: params[:post]
        @post = Post.new(post_params)
        if @post.save
            redirect_to @post
        else
            render 'new'
        end
        
    end

    def update
        puts ">>>>>> Posts Controller update!"
        @post = Post.find(params[:id])
        @author = current_author
        if @post.update(post_params)
            redirect_to @post
        else
            render 'edit'
        end
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
       
        redirect_to posts_path
      end

    private
        # Prevent mass-assign
        def post_params
            params.require(:post).permit(:title, :text)
        end
end
