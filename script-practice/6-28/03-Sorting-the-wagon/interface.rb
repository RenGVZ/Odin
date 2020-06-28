require_relative "wagon_sort"
names = []
answer = nil
# TODO: Ask the user about students to add to the Wagon.

puts "Type a student name"
answer = gets.chomp
names << answer

until answer == '' do
  puts "Type another student name or hit the 'return' key"
  answer = gets.chomp
  names << answer
end

names.delete_at(-1)
wagon_list = wagon_sort(names)
puts "Your wagon has #{wagon_list.size} members: " + wagon_list[0..-2].join(', ') + " and #{wagon_list[-1]}"
#       Remember, to read an input from the command line, use:
#       - `gets`:  http://www.ruby-doc.org/core-2.5.3/Kernel.html#method-i-gets
#       - `chomp`: http://www.ruby-doc.org/core-2.5.3/String.html#method-i-chomp



# TODO: Then call `wagon_sort` method defined in the wagon_sort.rb
#       file and display the sorted student list
