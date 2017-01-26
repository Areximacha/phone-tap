const Person = function (name) {
  this.name = name

  const getName = () => {
    return this.name
  }

  const text = (...data) => {
    console.log(data)
  }

  const call = (caller, callee) => {
    console.log(caller)
    console.log(callee.getName())
  }

  return {
    getName,
    text,
    call
  }
}

export default Person
