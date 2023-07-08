const initialState: IInitialState = {
  ui: "",
};

interface IAction {
  type: string;
  payload: string;
}

interface IInitialState {
  ui: string;
}

const ui = (state = initialState, action: IAction) => {
  switch (action.type) {
    case "SET_UI": {
      const newState = action.payload;
      return { ...state, ui: "" };
    }
  }
};

export default ui;
