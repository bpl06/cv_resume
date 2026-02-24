export const PERSONAL_KEY = 'personalInfo';
export const EDUCATION_KEY = 'educationInfo';
export const EXPERIENCE_KEY = 'experienceInfo';

export function setInitialStorage() {
  console.log('Initial Storage Set')
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
      name: 'Harvard University',
      degree: 'Bachelor of Arts (A.B.)', 
      startDate: '8/27/1980',
      endDate: '4/24/1984'
    },
    {
      id: crypto.randomUUID(),
      display: true,
      name: 'Yale University',
      degree: 'Doctor of Philosophy (Ph.D.)', 
      startDate: '8/14/1984',
      endDate: '5/15/1988'
    },
  ]))
  }
  if (!localStorage.getItem('experienceInfo')) {
    localStorage.setItem('experienceInfo', JSON.stringify([{
      id: crypto.randomUUID(),
      display: true,
      name: 'Burger King',
      position: 'The King',
      startDate: '2/13/1990',
      endDate: 'current',
      responsibilities: 'Worked as a Crew Member at Burger King, delivering fast and friendly customer service in a high-volume quick-service environment. Accurately took and processed customer orders using a POS system and drive-thru headset, prepared food according to company quality and safety standards, and maintained cleanliness of kitchen, dining, and service areas. Handled cash and electronic payments with accuracy, restocked supplies to support efficient operations, and collaborated with team members to meet speed-of-service and customer satisfaction goals while following all food safety and workplace procedures.'
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
  const newArr = item.map(x => 
    x.id === id ? updatedObject : x
  )
  localStorage.setItem(key, JSON.stringify(newArr))
}

export function setArrayItem(key, newObj) {
  let arr = JSON.parse(localStorage.getItem(key));
  arr.push(newObj)
  localStorage.setItem(key, JSON.stringify(arr));
}

export function submitArrayItem() {
  
}