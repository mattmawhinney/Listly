json.array!(@items) do |item|
  json.extract! item, :id, :description, :list_id
  json.url item_url(item, format: :json)
end
