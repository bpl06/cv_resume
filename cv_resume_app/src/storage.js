export const PERSONAL_KEY = 'personalInfo';
export const EDUCATION_KEY = 'educationInfo';
export const EXPERIENCE_KEY = 'experienceInfo';

export function setInitialStorage() {
  console.log('it ran')
  if (!localStorage.getItem('personalInfo')) {
    localStorage.setItem('personalInfo', JSON.stringify({
      name: '',
      email: '',
      phone: ''
    }))
  }
  if (!localStorage.getItem('educationInfo')) {
    localStorage.setItem('educationInfo', JSON.stringify([{
      id: crypto.randomUUID(),
      school: 'Kings Canyon',
      degree: 'asdf', 
      startDate: 'asdf',
      endDate: 'asdf'
    }]))
  }
  if (!localStorage.getItem('experienceInfo')) {
    localStorage.setItem('experienceInfo', JSON.stringify([{
      company: '',
      position: '',
      responsibilities: ''
    }]))
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

export function getArrayItem(key) {
  let item = JSON.parse(localStorage.getItem(key));
  return item;
}

export function setArrayItem(key, newObj) {
  let arr = JSON.parse(localStorage.getItem(key));
  arr.push(newObj)
  localStorage.setItem(key, JSON.stringify(arr));
}

export function submitArrayItem() {
  
}