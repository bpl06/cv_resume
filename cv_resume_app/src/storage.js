export const PERSONAL_KEY = 'personalInfo';
export const EDUCATION_KEY = 'educationInfo';
export const EXPERIENCE_KEY = 'experienceInfo';

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

export function updateItem(key, value, prop) {
  let item = JSON.parse(localStorage.getItem(key));
  item[prop] = value; //use brackets for prop because it's value is coming from a variable;
  localStorage.setItem(key, JSON.stringify(item));
}

export function getItem(key, prop) {
  let item = JSON.parse(localStorage.getItem(key));
  let value = item[prop];
  return value;
}