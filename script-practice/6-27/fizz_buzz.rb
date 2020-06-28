def fizzbuzz(number)
  fizz_array = (1..number).to_a
  fizz_array.each do |num|
    if num % 3 == 0 && num % 5 == 0
      puts 'fizzbuzz'
    elsif num % 3 == 0
      puts 'fizz'
    elsif num % 5 == 0
      puts 'buzz'
    else
      puts num
    end
  end
end

 fizzbuzz(69)