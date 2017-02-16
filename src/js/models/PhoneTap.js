import logs from '../data/logs'

const PhoneTap = function () {
  // Method that takes and array of person and returns an array of their profile information
  const getProfiles = (people) => {
    return people.map(function (personRef, index) {
      return mapProfile(personRef)
    })
  }

  // Method that returns profile information from the log data from a name
  const mapProfile = (personRef) => {
    let person = logs[personRef.getName()]

    return {
      id: person.firstname,
      name: `${person.firstname} ${person.surname}`,
      number: person.number,
      img: person.img
    }
  }

  // Method that takes a person and returns their logs from the log data
  const log = (data) => {
    const person = logs[data.getName()]

    let personLog = []

    if (person.log.length === 0) {
      return ['No Entries']
    }

    for (let i = 0; person.log.length > i; i++) {
      let currentLog = person.log[i]
      let logString = `${person.firstname} ${currentLog.type}ed ${currentLog.to.name} from ${currentLog.from.name}'s phone (${currentLog.from.number})`

      personLog.push(logString)
    }
    return personLog
  }

  // Exposes the methods
  return {
    log,
    getProfiles,
    mapProfile
  }
}

export default PhoneTap
