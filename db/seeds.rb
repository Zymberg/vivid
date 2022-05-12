# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# 
# user1 = User.create(username: "John", email: "john@gmail.com", password: "12345")
# user2 = User.create(username: "Jim", email: "jim@gmail.com", password: "54321")

# 
# agent1 = Agent.create(username: "Ben", email: "ben@gmail.com", password: "321321")
# agent2 = Agent.create(username: "Jane", email: "jane@gmail.com", password: "123123")


# listing1 = Listing.create(title: "Amazing house", image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg", price: 521300, sqft: 1234, description: "Great 5B/5B home")
# listing2 = Listing.create(title: "Greate house", image: "https://cdn.vox-cdn.com/thumbor/6itLJS9BZ-B5gXPjM1AB_z-ZKVI=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65890203/iStock_1067331614.7.jpg", price: 651300, sqft: 2234, description: "Great 7B/8B home")

# 
# review1 = Review.create(comment: "Beautiful house, most have it", user_id: user1.id, listing_id: listing1.id)
# review2 = Review.create(comment: "Gorgeous home, can't wait to move", user_id: user2.id, listing_id: listing2.id)

puts "Creating users..."
10.times do 
    User.create(username: Faker::Name, email: Faker::Internet.free_email, password: "123123")
end


# puts "Creating listings..."
# 5.times do
#     Listing.create(title: "Great house", image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg", price: 12341, sqft: 1234, description: "great house available")
# end

