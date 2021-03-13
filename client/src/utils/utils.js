export const addNumbers = numbers => {
  let sum = 0
  for (let key in numbers) {
    sum += parseInt(numbers[key])
  }

  return sum
}
