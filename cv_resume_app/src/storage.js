export function setInitialStorage() {
  if (!localStorage.getItem('personalInfo')) {
    localStorage.setItem('personalInfo', JSON.stringify({
      name: '',
      email: '',
      phone: ''
    }))
  }
  if (!localStorage.getItem('educationInfo')) {
    localStorage.setItem('educationInfo', JSON.stringify({
      school: '',
      degree: '', 
      startDate: '',
      endDate: ''
    }))
  }
  if (!localStorage.getItem('experienceInfo')) {
    localStorage.setItem('experienceInfo', JSON.stringify({
      company: '',
      position: '',
      responsibilities: ''
    }))
  }
} 



export function updateItem(key, value) {
  let item = JSON.parse(localStorage.getItem(key));
  item.name = value;
  localStorage.setItem(key, JSON.stringify(item));
}