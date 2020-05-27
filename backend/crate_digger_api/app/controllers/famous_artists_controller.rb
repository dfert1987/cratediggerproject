class FamousArtistsController < ApplicationController
    def index
        @famous_artists = FamousArtist.all
        render json: @famous_artists
    end

    def show
        @famous_artist = FamousArtist.find(params[:id])
        render json: @famous_artist
    end
end
