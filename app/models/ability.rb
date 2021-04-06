# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    # Define abilities for the passed in user here. For example:
    #
      user ||= User.new # guest user (not logged in)
      if user.admin?
        can :manage, :all
        can :dashboard, :all
        can :access, :rails_admin       # only allow admin users to access Rails Admin
        can :manage, :dashboard         # allow access to dashboard
        can :read, :dashboard
      else
        can [:show, :update], User, :id => user.id
        can :read, PoliticalParty
        can :update, PoliticalParty, :party_token => user.party_token
      end
  end
end
