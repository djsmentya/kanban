@lists.each do |list|
  json.set! list.id do
    json.partial! list, partial: 'lists/list'
    json.cards do
      list.cards.each do |card|
        json.set! card.id do
          json.partial! card, partial: 'cards/card'
        end
      end
    end
  end
end
