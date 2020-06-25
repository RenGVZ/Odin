def coach_answer(your_message)
  # TODO: return coach answer to your_message
  correct_answer = "I am going to work right now!"
    if your_message.end_with?('?')
      puts "Silly question, get dressed and go to work!"
    elsif your_message == correct_answer
      puts "Good, that's what I wanted to hear!"
    else 
      puts "I don't care, get dressed and go to work!"
    end
end

def coach_answer_enhanced(your_message)
  # TODO: return coach answer to your_message, with additional custom rules of yours!
  correct_answer = "I am going to work right now!"
  if your_message == correct_answer
    puts "That's what I like to hear"
  elsif your_message == your_message.upcase
    puts "I can feel your motivation! But I don't care, get dressed and go to work!"
  elsif your_message.end_with?('?')
    puts "Silly question, get dressed and go to work!"
  else 
    puts "I don't care, get dressed and go to work!"
  end
end

