def ip_to_num(ip_address)
  # TODO: return the number version of the `ip_address` string
  # ip_address = "37.160.113.170"
  # comparator = [128, 64, 32, 16, 8, 4, 2, 1 ]
  binary_components = ip_address.split(".").map do |group|
    p "group.to_i.to_s(2).rjust(8, '0')"
    group.to_i.to_s(2).rjust(8, '0')
  end

  binary_components.join.to_i(2)
  # p binary_components

end

def num_to_ip(number)
  # p number.to_s(2).size
  decimal_number = number.to_s(2).rjust(32, '0').scan(/.{8}/).map {|group| group.to_i(2)}
  decimal_number.join('.')
  # p joined = decimal_number.join('.')
  # TODO: return the string IP address from the `number`
end

# p ip_to_num("37.160.113.170")
p num_to_ip(631271850)