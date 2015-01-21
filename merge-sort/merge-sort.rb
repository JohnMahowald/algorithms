def merge_sort(arr)
  return arr if arr.count == 0 || arr.count == 1

  middle = arr.length / 2
  left = arr[0...middle]
  right = arr[middle..-1]

  merge(merge_sort(left), merge_sort(right))
end

def merge(a, b)
  result = []

  i, j = 0, 0;

  while i < a.count && j < b.count
    if a[i] < b[j]
      result << a[i]
      i += 1
    else
      result << b[j]
      j += 1
    end
  end

  result.concat(a[i..-1]).concat(b[j..-1])
end
