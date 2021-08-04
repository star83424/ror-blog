class PostsController < ApplicationController
    before_action :authenticate_author!, except: [:index, :show]
    before_action :sanitize_page_params
    after_action :set_csrf_headers

    def index()
        puts ">>>>>> Posts Controller index!"
        # TODO: Only for angular project currently not connecting to a sign_out api
        sign_out current_author

        puts ">>>>>>>>>> params[:blogger_id]", params[:blogger_id]
        if params[:blogger_id]
            puts ">>>>>>>>>> params[:blogger_id]", params[:blogger_id]
            @blogger = Author.find(params[:blogger_id])
        elsif params[:blogger]
            puts ">>>>>>>>>> params[:blogger]", params[:blogger]
            @blogger = Author.where('email = ?', params[:blogger]).first
        end
        
        if !@blogger
            puts ">>>>>>>>>> !@blogger"
            # Get all posts result
            post_relation = Post.order('created_at DESC')
        else
            puts ">>>>>>>>>> @blogger"
            # Get posts result by blogger
            post_relation = Post.where('author_id = ?', @blogger.id).order('created_at DESC')
        end

        # Total posts of current relation
        @total_posts = post_relation.count

        # Post amount per page
        @per_page = (params[:per_page] > 0)? params[:per_page] : 10

        # Total page number for dropdown
        @total_page = (@total_posts/ @per_page.to_f).ceil

        # Get the target page & check if it's validate
        @go_to_page = (params[:go_to_page] > 0)? params[:go_to_page] : 1
        @go_to_page = 1 if @go_to_page > @total_page

        # Get relation result by LIMIT & OFFSET
        @posts = post_relation.order('created_at DESC').limit(@per_page).offset(offset(@go_to_page, @per_page))

        render :json => { 
            blogger: @blogger, 
            posts: @posts.as_json(methods:[:author]),
            pagination: {
                total_page: @total_page,
                per_page: @per_page,
                current_page: @go_to_page,
                total_posts: @total_posts
            },
            author_signed_in: author_signed_in?
        }
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

    private 
        # Pre-action to format page params
        def sanitize_page_params
            params[:per_page] = params[:per_page].to_i
            params[:go_to_page] = params[:go_to_page].to_i
        end

    protected
        def set_csrf_headers
            cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?  
            response.headers['X-CSRF-Param'] = request_forgery_protection_token
            response.headers['X-CSRF-Token'] = form_authenticity_token
        end
end
