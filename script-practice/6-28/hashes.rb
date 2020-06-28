# students_age = {
#   "Larry" => 24,
#   "Bob" => 67,
#   "Tim" => 14
# }
# p students_age.keys
# p students_age.values
# p "#{students_age[0]} is #{students_age["Larry"]}"
cities = {
  "tokyo" => {
    :country => "Japan",
    :language => "Japanese",
    :population => "135 million",
    :home => "Nakano"
  },
  "madrid" => {
    :country => "Spain",
    :language => "Spanish",
    :population => "5 million",
    :home => "Parque Retiro"
  }
}

tokyo = "Tokyo is a city of #{cities["tokyo"][:population]} people located in 
  #{cities["tokyo"][:country]}. The language spoken is #{cities["tokyo"][:language]}. 
  Within this sprawling metropolis, I live in an unassuming and charming residential area 
  called #{cities["tokyo"][:home]}."

madrid = "Madrid is a city that is near and dear to my heart. It is located in the heart of 
  #{cities["madrid"][:country]} and the most common language is Castillian 
  #{cities["madrid"][:language]} (however there are four others).
  The city is home to roughly #{cities["madrid"][:population]} people. 
  As a student I lived there, close to the incredible #{cities["madrid"][:home]}."

  p tokyo.strip
  # puts madrid