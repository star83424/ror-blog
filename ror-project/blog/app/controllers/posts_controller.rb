class PostsController < ApplicationController
    before_action :authenticate_author!, except: [:index, :show]

    def index()
        puts ">>>>>> Posts Controller index!"

        if params[:blogger_id]
            @blogger = Author.find(params[:blogger_id])
        elsif params[:blogger]
            @blogger = Author.where('email = ?', params[:blogger]).first
        end
        @total_posts = Post.count

        # Post amount per page
        @per_page = params[:per_page]? params[:per_page].to_i : 10

        # Total page number for dropdown
        @total_page = (@total_posts/ @per_page.to_f).ceil

        # Get the target page & check if it's validate
        @go_to_page = params[:go_to_page]? params[:go_to_page].to_i : 1
        @go_to_page = 1 if @go_to_page > @total_page

        if !@blogger
            # Get the posts result
            @posts = Post.order('created_at DESC').limit(@per_page).offset(offset(@go_to_page, @per_page))
            params.delete(:blogger_id)
            params.delete(:blogger)
        else# Get the posts result
            puts @blogger
            @posts = Post.where('author_id = ?', @blogger.id).order('created_at DESC').offset(offset(@go_to_page, @per_page))
        end

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
        validate_the_author_of_the_post(@post)
        @author = current_author
    end

    def create
        puts ">>>>>> Posts Controller create!"
        # render json: params[:post]
        @post = Post.new(post_params)
        @post.author_id = current_author.id
        if @post.save
            redirect_to @post
        else
            render 'new'
        end
        
    end

    def update
        puts ">>>>>> Posts Controller update!"
        @post = Post.find(params[:id])
        validate_the_author_of_the_post(@post)
        @author = current_author
        if @post.update(post_params)
            redirect_to @post
        else
            render 'edit'
        end
    end

    def destroy
        @post = Post.find(params[:id])
        validate_the_author_of_the_post(@post)
        @post.destroy
       
        redirect_to posts_path
    end

    private
        # Calculate off set
        def offset(current_page, per_page)
            per_page * (current_page - 1)
        end


    private
        # Check if it's the author of this post
        def is_the_author_of_the_post(post)
            post.author_id == current_author.id
        end

    private
        # Prevent mass-assign
        def post_params
            params.require(:post).permit(:title, :text)
        end

    private
        # Prevent cross author post-edition
        def validate_the_author_of_the_post(post)
            if !is_the_author_of_the_post(post)
                puts ">>>>>> Validation failed: Un-author action is prohibited!"
                redirect_to post_path
            end
        end
end
