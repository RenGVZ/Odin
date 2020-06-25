# This "require" line loads the contents of the 'date' file from the standard
# Ruby library, giving you access to the Date class.
require 'date'

def age_in_days(day, month, year)
  # TODO: return the age expressed in days given the day, month, and year of birth
  today = Date.today
  day_of_birth = Date.new(year, month, day)

  days_since_birth = today - day_of_birth
  return days_since_birth.to_i
end

# p age_in_days(15, 5, 1992)