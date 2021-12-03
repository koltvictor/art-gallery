class Api::ArtsController < ApplicationController
    before_action :set_art, only: [:show, :update, :destroy]
    
    def index
        @arts = Art.all
        render json: @arts
    end

    def show
        @art = Art.find(params[:id])
        render json: @art, status: 200
    end
    
    def create
        @art = Art.new (art_params)
        if art.save
            render json: @art, status: 200
        else
            render json: {errors: art.errors}, status: 422
        end
    end

    def update
        @art = Art.find(params[:id])
        if @art.update_attributes(params[:art_params])
            render json: @art, status: 200
        else
            render json: {errors: art.errors}, status: 422
        end
    end

    private

    def art_params
        params.permit(:user_id, :title, :artist, :creation_date, :number_of, :medium, :signed, :rented, :image, :image_height, :image_width, :frame_height, :frame_width, :notes)
    end
end
