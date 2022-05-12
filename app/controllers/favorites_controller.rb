class FavoritesController < ApplicationController
  before_action :set_favorite, only: %i[ show edit update destroy ]

  # GET /favorites or /favorites.json
  def index
    @favorites = Favorite.all
  end

  # GET /favorites/1 or /favorites/1.json
  def show
    favorite = Favorite.find_by(id: params[:id])
    if favorite
      render json: favorite
    else
      render json: { error: "there are no Favorites for this listing"}, status: 404
    end
  end

  # GET /favorites/new
  def new
    @favorite = Favorite.new
  end


  # POST /favorites or /favorites.json
  def create
    favorite = Favorite.create!(favorite_params)
    render json: favorite, status 201
  end

 

  # DELETE /favorites/1 or /favorites/1.json
  def destroy
    @favorite.destroy

    respond_to do |format|
      format.html { redirect_to favorites_url, notice: "Favorite was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.fetch(:favorite, {})
    end
end
