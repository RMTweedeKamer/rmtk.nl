require "rails_helper"

RSpec.describe PoliticalPartiesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/political_parties").to route_to("political_parties#index")
    end

    it "routes to #new" do
      expect(get: "/political_parties/new").to route_to("political_parties#new")
    end

    it "routes to #show" do
      expect(get: "/political_parties/1").to route_to("political_parties#show", id: "1")
    end

    it "routes to #edit" do
      expect(get: "/political_parties/1/edit").to route_to("political_parties#edit", id: "1")
    end


    it "routes to #create" do
      expect(post: "/political_parties").to route_to("political_parties#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/political_parties/1").to route_to("political_parties#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/political_parties/1").to route_to("political_parties#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/political_parties/1").to route_to("political_parties#destroy", id: "1")
    end
  end
end
