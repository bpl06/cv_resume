export const collapseList = (state, stateUpdater) => {
  const newState = state.map((x) => (x = { ...x, display: false }));
  stateUpdater(newState);
};

export const hideAddButton = (value) => {
  const element = document.getElementById("add-button");
  value ? element.classList.add("hide") : element.classList.remove("hide");
};

export const navSelected = (value, id) => {
  const element = document.getElementById(id);
  value
    ? element.classList.add("nav-selected")
    : element.classList.remove("nav-selected");
};

export const formListVisible = (...stateUpdater) => {
  stateUpdater.forEach(
    updater((prev) =>
      prev.map((x) => ({
        ...x,
        display: true,
      })),
    ),
  );
};
