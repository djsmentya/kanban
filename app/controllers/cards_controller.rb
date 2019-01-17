class CardsController < ApplicationController
  before_action :set_board, except: :index
  before_action :set_list, except: :index

  # GET /cards
  # GET /cards.json
  def index
    @cards = Card.all
  end

  # GET /cards/1
  # GET /cards/1.json
  def show
  end

  # GET /cards/new
  def new
    @card = Card.new
  end

  # GET /cards/1/edit
  def edit
  end

  # POST /cards
  # POST /cards.json
  def create
    @card = @list.cards.new(card_params)

    respond_to do |format|
      if @card.save
        format.json { render :show, status: :created, location: [@board, @list, @card] }
      else
        format.html { render :new }
        format.json { render json: @card.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cards/1
  # PATCH/PUT /cards/1.json
  def update
    @card = @list.cards.find(params[:id])
    respond_to do |format|
      if @card.update(card_params)
        format.json { render :show, status: :ok, location: [@board, @list, @card] }
      else
        format.html { render :edit }
        format.json { render json: @card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cards/1
  # DELETE /cards/1.json
  def destroy
    @card.destroy
    respond_to do |format|
      format.html { redirect_to cards_url, notice: 'Card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = @board.lists.find(params[:list_id])
    end

    def set_board
      @board = Board.find(params[:board_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def card_params
      params.require(:card).permit(:name, :position, :list_id)
    end
end
