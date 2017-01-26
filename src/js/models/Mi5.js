import logs from '../data/logs'

const Mi5 = function () {
  const getProfiles = (people) => {
    return people.map(function (personRef, index) {
      return mapProfile(personRef)
    })
  }

  const mapProfile = (personRef) => {
    let person = logs[personRef.getName()]

    return {
      id: person.firstname,
      name: `${person.firstname} ${person.surname}`,
      number: person.number,
      img: person.img
    }
  }

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

  return {
    log,
    getProfiles,
    mapProfile
  }
}

export default Mi5
