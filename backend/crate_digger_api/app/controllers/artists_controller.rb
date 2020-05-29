class ArtistsController < ApplicationController
    before_action :find_artist, only:[:update]
    def index
        @artists = Artist.all
        render json: @artists, include: [:country]
    end

    def show
        @artist = Artist.find(params[:id])
        render json: @artist
    end

    def create 
        @artist = Artist.new(artist_params)
        render json: @artist
     end

def update 
    @artist.update(artist_params)
    render json: @artist

end
#         # header = request.headers["Authorization"]

#         # if !header
#         #     render json: {error: "Not authorized."}, status: :unauthorized
#         # else
#         #     token = header.split('')[1]
#         #     secret = Rails.application.secrets.secret_key_base
#         # begin
#         #     payload = JWT.decode(token, secret).first
#             @artist.update(artist_params)
#         rescue
#             render json: { error: 'Must be logged in.'}, status: :unauthorized
#      end
# end

    private 

    def find_artist
        @artist = Artist.find(params[:id])
    end

    def artist_params
        params.require(:artist).permit(:name, :genre, :image, :song, :title, :discogs_id, :favorited, :country_id, :famous_artist_id)
    end

    end
