require_relative "compute_name"

# TODO: ask for the first name
puts "What's your first name?"
first = gets.chomp
# TODO: ask for the middle name
puts "What's your middle name?"
middle = gets.chomp
# TODO: ask for the last name
puts "What's your last name?"
last = gets.chomp
# TODO: Print a greeting to the user with the full name concatenated,
#       something like "Hello, Boris Paillard"

# greeting = compute_name(first, middle, last)

p "Hello there, #{compute_name(first, middle, last)}"
