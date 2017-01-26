import Person from '../models/Person'
import Mi5 from '../models/Mi5'

import profile from '../templates/profile'

const mi5 = new Mi5()

const dan = new Person('Dan')
const anthony = new Person('Anthony')
const alex = new Person('Alex')
const erin = new Person('Erin')

const people = [dan, anthony, alex, erin]

// const phone = {owner: dan, number: '0776253227'}

// dan.call(phone, alex)

// const mark = new Person('Mark')
// dan.text(phone, alex, mark)

export default {
  renderProfiles () {
    const profiles = mi5.getProfiles(people)

    for (let i = 0; profiles.length > i; i++) {
      const profileTemplate = profile(profiles[i])
      const profileModule = document.getElementById('profile-wrapper')
      profileModule.insertAdjacentHTML('beforeend', profileTemplate)
    }
  },

  renderCompnents () {
    for (let i = 0; people.length > i; i++) {
      console.log(mi5.log(people[i]))
    }
  },

  init () {
    this.renderProfiles()
  }
}
