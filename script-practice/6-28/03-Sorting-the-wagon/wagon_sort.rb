def wagon_sort(students)
  # TODO: return (not print!) a copy of students, sorted alphabetically
  students_array = students.to_a.map { |name| name.capitalize }
  # sorted = students_array.sort.map {|student| "Congratulations! Your wagon is #{student}"}
  # return sorted
end

# p wagon_sort("gavin, Bob, ricky")