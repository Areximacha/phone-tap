// Person onject
const Person = function (name) {
  this.name = name

  // Returns the person's name
  const getName = () => {
    return this.name
  }

  // Text method that takes a phone and a number of recipients
  const text = (...data) => {
    // TODO: Handle the data in some way
    console.log(data)
  }

  // Call method that takes a phone and callee
  const call = (phone, callee) => {
    // TODO: Handle the phone and callee
    console.log(phone)
    console.log(callee.getName())
  }

  // Exposes the methods
  return {
    getName,
    text,
    call
  }
}

export default Person
