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
    localStorage.setItem('educationInfo', JSON.stringify([
    {
      id: crypto.randomUUID(),
      display: true,
      school: 'Kings Canyon',
      degree: 'asdf', 
      startDate: 'asdf',
      endDate: 'asdf'
    },
    {
      id: crypto.randomUUID(),
      display: true,
      school: 'Storm Point',
      degree: 'Goober', 
      startDate: '1234',
      endDate: '1895'
    },
  ]))
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

export function getArray(key) {
  let item = JSON.parse(localStorage.getItem(key));
  return item;
}

export function getArrayItem(key, id) {
  let item = JSON.parse(localStorage.getItem(key))
  return item.filter((x) =>
    x.id == id
  )
}

export function updateArrayItem(key, value, prop, id) {
  let item = JSON.parse(localStorage.getItem(key))
  console.log(id)
  item.forEach(x => {
    console.log(x)
    if (x.id == id) {
      x[prop] = value
    }
  })
  localStorage.setItem(key, JSON.stringify(item))
}

export function updateObject(key, updatedObject, id) {
  let item = JSON.parse(localStorage.getItem(key))
  const newArr = item.map(x => {
    if (x.id == id) {
      return updatedObject
    }
    return x;
  })
  console.log(newArr)
  localStorage.setItem(key, JSON.stringify(newArr))
}

export function setArrayItem(key, newObj) {
  let arr = JSON.parse(localStorage.getItem(key));
  arr.push(newObj)
  localStorage.setItem(key, JSON.stringify(arr));
}

export function submitArrayItem() {
  
}