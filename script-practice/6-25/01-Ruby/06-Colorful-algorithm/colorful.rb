def colorful?(number)
  # TODO: return true if the number is colorful, false otherwise
  digits = digits(number)
  products = digit_subset_products(digits)
  products == products.uniq
end

def digits(number)
  d_array = []
  number.to_s.split('').each do |num|
    d_array << num.to_i
  end
  d_array
end

def digit_subset_products(digits)
  products = []
  (1..digits.size).each do |i|
    # p digits.size = 3
    (0..(digits.size - i)).each do |j|
      # p digits.size - i
      # p //
      # p i
      product = 1
      digits[j...(j + i)].each do |digit_subset|
        # p "digits: #{digits[j..(j + i)]} j = #{j} i = #{i}"
        product = product * digit_subset
        p product
        # p "digit subsets: #{digit_subset}"
      end
      p //
      p product
      products << product
    end
  end
  products
  p "**"
  p products
end

p colorful?(236)