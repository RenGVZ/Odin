def sum_with_for(min, max)
  # CONSTRAINT: you should use a for..end structure
  range = (min..max).to_a

  return "Min number can't be greater than max number, try again" if min > max

  sum = 0
  for i in range do 
    sum += i
  end
  return sum
end

# p sum_with_for(100, 70)

def sum_with_while(min, max)
  # CONSTRAINT: you should use a while..end structure
  return -1 if min > max 
  
  sum = 0
  i = min
  
  while i <= max do
    sum += i
    i += 1
  end
  return sum
end

p sum_with_while(1, 3)
