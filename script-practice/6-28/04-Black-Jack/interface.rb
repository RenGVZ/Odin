require_relative "croupier"

# TODO: make the user play from terminal in a while loop that will stop
#       when the user will not be asking for  a new card
def play_game

  player_score = pick_player_card
  bank_score = pick_bank_score
  answer = 'y'

  # puts "Card? Type 'y' or 'yes' to get a new card"
  # answer = gets.chomp

  while answer == "y" && player_score <= 21
      puts state_of_the_game(player_score, bank_score)
      puts "Type 'y' or 'yes' to get a new card"
      answer = gets.chomp
      player_score += pick_player_card if answer == 'y'
      # else 
      #   player_score += pick_player_card
      #   puts state_of_the_game(player_score, bank_score)
      # end
    # p player_score
  end

  puts end_game_message(player_score, bank_score)

end

play_game