class ArtistsController < ApplicationController
    def index
            @artists = Artist.all
            render json: @artists, include: [:country]
    end

    def show
        @artist = Artist.find(params[:id])
        render json: @artist
    end

    def create 
        token = request.headers[ Authorization ]

        if !token
            render status: :unauthorized

        else
            @artist = Artist.new(artist_params)
        
        render json: @artist
    end
end

    private 

    def artist_params
        params.require(:artist).permit([:name, :genre, :image, :country_id, :famous_artist_id])
    end


end