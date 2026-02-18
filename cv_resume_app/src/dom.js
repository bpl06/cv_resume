export const collapseList = (id, state, stateUpdater) => {
  const newState = state.map(x => 
    x.id === id ? {...x, display: true } : {...x, display: false}
  )
  stateUpdater(newState)
}