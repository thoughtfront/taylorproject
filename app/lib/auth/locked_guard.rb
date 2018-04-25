module Auth
  class LockedGuard < Clearance::SignInGuard

    def call
      puts "\n\LOCKED GUARD!!\n\n"
      if signed_in? && !current_user.locked_at
        next_guard
      else
        failure("User is Locked")
      end
    end

  end
end
