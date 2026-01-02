//THIS FILE IS NOT RUNNING IN DEV ENVIRONMENT, FIND OUT WHY

const personalInfo = {
  name: '',
  email: '',
  phone: ''
}

const experienceInfo = {
  school: '',
  degree: '',
  startDate: '',
  endDate: ''
}

const educationInfo = {
  company: '',
  position: '',
  responsibilities: ''
}

console.log('omg why doesnt it work')

localStorage.set('personalInfo', JSON.stringify(personalInfo))
localStorage.set('experienceInfo', JSON.stringify(experienceInfo))
localStorage.set('educationInfo', JSON.stringify(educationInfo))