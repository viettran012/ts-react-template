const setUi = (type: string) => {
  return {
    type: "SET_UI",
    payload: type,
  };
};

export { setUi };
