def sum(array)
  sum = 0
  array.length.times |i|
    sum += array[i]
  end
  sum
end

def range(x, y, z=1)
  array = []
  i = x
  if z == 0 || x == y
    array = [i]
  elsif y > x
    while i <= y && i >= x
      array << i
      i = i + z
    end
  else
    while i >= y && i <= x
      array << i 
      i = i + z
    end
  end
  array
end
