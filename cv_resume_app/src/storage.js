export const PERSONAL_KEY = "personalInfo";
export const EDUCATION_KEY = "educationInfo";
export const EXPERIENCE_KEY = "experienceInfo";

export function setInitialStorage() {
  console.log("Initial Storage Set");
  if (!localStorage.getItem("personalInfo")) {
    localStorage.setItem(
      "personalInfo",
      JSON.stringify({
        name: "Lil Wayne",
        email: "weezy@ymcmb.com",
        phone: "504-420-6969",
      }),
    );
  }
  if (!localStorage.getItem("educationInfo")) {
    localStorage.setItem(
      "educationInfo",
      JSON.stringify([
        {
          id: crypto.randomUUID(),
          display: true,
          name: "Harvard University",
          degree: "Bachelor of Arts (A.B.)",
          startDate: "8/27/1980",
          endDate: "4/24/1984",
        },
        {
          id: crypto.randomUUID(),
          display: true,
          name: "Yale University",
          degree: "Doctor of Philosophy (Ph.D.)",
          startDate: "8/14/1984",
          endDate: "5/15/1988",
        },
      ]),
    );
  }
  if (!localStorage.getItem("experienceInfo")) {
    localStorage.setItem(
      "experienceInfo",
      JSON.stringify([
        {
          id: crypto.randomUUID(),
          display: true,
          name: "Burger King",
          position: "The King",
          startDate: "2/13/1990",
          endDate: "current",
          responsibilities:
            "In addition to cashier responsibilities, demonstrated elite verbal agility and lyrical dominance, widely recognized (by self and possibly others) as the greatest rapper alive. Freestyled daily over the rhythmic beeping of the registers, dropped bars about double cheeseburgers and hustle mentality, and maintained impeccable flow under pressure — proving that while customers may “Have It Your Way,” the mic is handled only one way: flawlessly.",
        },
        {
          id: crypto.randomUUID(),
          display: true,
          name: "McDonalds",
          position: "MC Ronald",
          startDate: "5/17/1980",
          endDate: "1/12/1987",
          responsibilities:
            "In addition to grill mastery and order precision at McDonalds, revolutionized the fast-food rapper industry with unmatched lyrical innovation and drive-thru dominance. Widely regarded (internally and without dispute) as the greatest rapper alive, delivered high-performance freestyles over the symphony of fryer timers and receipt printers, transforming the lunch rush into a live mixtape release party. Dropped platinum-level bars about Big Macs, generational wealth, and the strategic hustle behind perfectly salted fries, all while maintaining composure under peak McFlurry turbulence. Proved that while billions may be served, only one can truly serve the beat — flawlessly, efficiently, and with a side of rhythm.",
        },
      ]),
    );
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
  let item = JSON.parse(localStorage.getItem(key));
  return item.filter((x) => x.id == id);
}

export function updateArrayItem(key, value, prop, id) {
  let item = JSON.parse(localStorage.getItem(key));
  console.log(id);
  item.forEach((x) => {
    console.log(x);
    if (x.id == id) {
      x[prop] = value;
    }
  });
  localStorage.setItem(key, JSON.stringify(item));
}

export function updateObject(key, updatedObject, id) {
  let item = JSON.parse(localStorage.getItem(key));
  const newArr = item.map((x) => (x.id === id ? updatedObject : x));
  localStorage.setItem(key, JSON.stringify(newArr));
}

export function deleteObject(key, id) {
  let item = JSON.parse(localStorage.getItem(key));
  const newItem = item.filter((x) => x.id !== id);
  localStorage.setItem(key, JSON.stringify(newItem));
}

export function setArrayItem(key, newObj) {
  let arr = JSON.parse(localStorage.getItem(key));
  arr.push(newObj);
  localStorage.setItem(key, JSON.stringify(arr));
}

export function submitArrayItem() {}
