class FallbackController < ActionController::Base

    def index
      render file: 'src/app.js'
    end
  end