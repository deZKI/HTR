import {SET_MENU_SWITCHER, SetMenuSwitcherAction} from "./menuSwitcher/menuSwitcherActions";
import {TMenuSwitcherState, menuSwitcherReducer} from "./menuSwitcher/menuSwitcherReducer";

export type TInitialState = {
  menuSwitcher: TMenuSwitcherState;
}

export const initialState: TInitialState = {
  menuSwitcher: {
    menuSwitcher: false,
  },
}

type Actions = SetMenuSwitcherAction

export const rootReducer = (state = initialState, action: Actions): TInitialState => {
  switch (action.type) {
    case SET_MENU_SWITCHER:
      return {
        ...state,
        menuSwitcher: menuSwitcherReducer(state.menuSwitcher, action)
      }
    default:
      return state;
  }
}
