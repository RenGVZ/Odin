require_relative "coach_answer"
# TODO: Implement the program that makes you discuss with your coach from the terminal.
puts "This is your coach, what is it?"

answer = ''

while answer != "I am going to work right now!"
  print ">> "
  answer = gets.chomp
  coach_answer_enhanced(answer)
end

puts "See you skeeter"