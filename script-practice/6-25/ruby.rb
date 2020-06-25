nums = (1..10).to_a
# p nums
# mapped = array.ma p {|num| puts num + 1 }

fruits = ['apple', 'pear', 'banana', 'grapes', 'strawberry']

# puts fruits.any?(String)
# puts fruits.collect{'orange'}

# puts fruits.count
# sliced = nums.each_slice(5)
# p sliced
# nums.each_slice(5) {|slice| p slice}

# p sliced_up

odd = nums.reject{|num| num % 2 == 0}

p odd.join(' - ')
# p joins