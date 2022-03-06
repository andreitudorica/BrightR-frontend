export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem("store");
    if (serializedState === null) {
      return undefined;
    }

    const storeFromLocalStorage = JSON.parse(serializedState);

    return {
      ...storeFromLocalStorage,
    };
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    window.localStorage.setItem("store", JSON.stringify(state));
  } catch (error) {
    console.log("Error saving store to session storage");
  }
};
