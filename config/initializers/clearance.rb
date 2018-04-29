Clearance.configure do |config|
  config.mailer_sender = "donotreply@oursiders.com"
  config.cookie_domain = 'oursiders.com'
  config.rotate_csrf_on_sign_in = true
  config.routes = false
  config.sign_in_guards = [Auth::LockedGuard];
end
