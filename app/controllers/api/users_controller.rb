class Api::UsersController < ApplicationController
    skip_before_action :confirm_auth
end
