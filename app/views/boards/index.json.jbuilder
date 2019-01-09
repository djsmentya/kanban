@boards.each do |board|
  json.set! board.id do
    json.partial! board, partial: 'boards/board'
  end
end
