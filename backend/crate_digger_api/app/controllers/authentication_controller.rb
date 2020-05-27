# require jwt

class AuthenticationController < ApplicationController
    def login
        @user = User.find_by(username: params[:username])
        if !@user
            render json: { error: "Username not valid. Try again." }, status: :unauthorized
        else
            if !@user.authenticate(params[:password])
                render json: { error: "Incorrect password. Try again." }, status: :unauthorized
            else 
                payload = {
                    user_id: @user.id,
                    username: @user.username
                }
                secret_key = Rails.application.secrets.secret_key_base
                token = JWT.encode(payload, secret_key)

                render json: { token: token }
            end
        end
    end
end
