@cards.each do |card|
  json.set! card.id do
    json.partial! card, partial: 'cards/card'
  end
end
