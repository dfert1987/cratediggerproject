class ApplicationController < ActionController::API

    def authenticate
        authorization_header = request.headers["Authorization"]
        token = authorization_header.split(" ")[1]
        secret = Rails.application.secrets.secret_key_base
        decoded_token = JWT.decode(token, secret)
    end
end
