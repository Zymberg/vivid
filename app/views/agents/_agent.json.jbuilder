json.extract! agent, :id, :username, :email, :password, :created_at, :updated_at
json.url agent_url(agent, format: :json)
