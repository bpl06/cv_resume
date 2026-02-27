export const collapseList = (id, state, stateUpdater) => {
  const newState = state.map(x => 
    x.id === id ? {...x, display: true } : {...x, display: false}
  )
  stateUpdater(newState)
}

export const hideAddButton = (value) => {
  const element = document.getElementById('add-button');
  value ? element.classList.add('hide') : element.classList.remove('hide');
}

export const navSelected = (value, id) => {
  const element = document.getElementById(id);
  value ? element.classList.add('nav-selected') : element.classList.remove('nav-selected');
}