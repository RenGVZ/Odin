class Shape
  @@shapes = 0
  def initialize(name, length, width, sides)
    @name, @length, @width, @sides = name, length, width, sides
    @@shapes += 1
  end

  def get_length
    puts @length
  end

  def get_width
    puts @width
  end

  def get_area
    @length * @width
  end


private

  def self.count
    puts @@shapes
  end

end

class BigShape < Shape
  def sides
    @sides
    puts "the #@name has #@sides sides"
  end
end

big_star = BigShape.new('big star', 400, 450, 5)

puts big_star.sides


circle = Shape.new('circle', 100, 100, 0)
rectagle = Shape.new('rectangle', 200, 350, 4)
tri = Shape.new('triangle', 140, 30, 3)

# Shape.count

# area = rectagle.get_area()
# p "The rectangle's area is: #{area}"
# circle.get_length