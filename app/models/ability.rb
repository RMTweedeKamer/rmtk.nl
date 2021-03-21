# frozen_string_literal: true

class Ability
  include CanCan::Ability

  user ||= User.new # guest user (not logged in)
  if user.superadmin_role?
        can :manage, :all
        can :access, :rails_admin       # only allow admin users to access Rails Admin
        can :manage, :dashboard         # allow access to dashboard
  end

  end
end