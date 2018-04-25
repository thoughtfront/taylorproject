class ApplicationController < ActionController::Base
  include Clearance::Controller
  protect_from_forgery with: :exception

  #######
  # AUTH methods
  #######

  def sign_in(user)
    super user
    if !user.nil?
      Thread.current[:user] = user
      user.last_sign_in_at = DateTime.now
      user.last_sign_in_ip = request.remote_ip
      user.save
    end
  end

  def sign_out
    Thread.current[:user] = nil
    super
  end
end
