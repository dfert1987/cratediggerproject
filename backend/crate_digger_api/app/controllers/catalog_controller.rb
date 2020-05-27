class CatalogController < ApplicationController
    def index
        headers = request.headers
        authorization_header = headers["Authorization"]

        if !authorization_header
            render json: {error: "Sorry fam, that didn't work."}, status: :unauthorized
        else
            token = authorization_header.split(' ')[1]
            secret = Rails.application.secrets.secret_key_base
            payload = JWT.decode(token, secret).first
            render json: { message: "Welcome to Global Crate Digger, #{payload["username"]}!"}
        end
    end
end
