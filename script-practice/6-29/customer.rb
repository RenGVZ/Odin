class Customer
  def initialize(id, name, address)
    # @customer += 1
    @id = id
    @name = name
    @address = address
  end

  def details()
    puts "Customer's name is #@name."
    puts "Their id is #@id."
    puts "And they live in #@address."
  end

  def Customer.say_something
    puts "Something!"
  end

end

bob = Customer.new(2, "Bob", "1407 Bonnie Lane")

puts bob.details
Customer.say_something