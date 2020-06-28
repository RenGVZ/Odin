require_relative 'black_jack'

def state_of_the_game(player_score, bank_score)
  # TODO: return (not print!) a message containing the player's score and bank's score
  "You have #{player_score} and the dealer has #{bank_score}"
end

def end_game_message(player_score, bank_score)
  # TODO: return (not print!) a message telling if the user won or lost.
  if player_score > 21
    return "Your score is #{player_score}, you lose"
  elsif player_score == 21
    return "You beat the bank and got 21, you win!"
  elsif player_score > bank_score
    return "You have #{player_score} and the bank has #{bank_score}, congratulations you win!"
  elsif player_score < bank_score
    return "You have #{player_score} and the bank has #{bank_score}, you lose"
  elsif player_score == bank_score
    return "Push tie, you get your money back"
  end
end
# p state_of_the_game(pick_player_card, pick_bank_score)