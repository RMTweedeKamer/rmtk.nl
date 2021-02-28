class PagesController < ApplicationController
  include HighVoltage::StaticPage

  skip_before_action :require_login
  layout :layout_for_page



  private

  def layout_for_page
    case params[:id]
    when 'home'
      'home'
    else
      'application'
    end
  end
end
