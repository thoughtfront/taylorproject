class MainController < ApplicationController
  before_action :require_login

  def index
    # puts "\n\nUSER:\n#{Thread.current[:user]\n\n}"
  end
end
