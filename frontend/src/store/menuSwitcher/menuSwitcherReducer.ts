import {SET_MENU_SWITCHER, SetMenuSwitcherAction} from "./menuSwitcherActions";
import {initialState} from "../reducer";

export type TMenuSwitcherState = {
  menuSwitcher: boolean;
}

type TMenuSwitcherActions = SetMenuSwitcherAction;

export const menuSwitcherReducer = (state = initialState.menuSwitcher, action: TMenuSwitcherActions): TMenuSwitcherState => {
  switch (action.type) {
    case SET_MENU_SWITCHER:
      return {
        ...state,
        menuSwitcher: action.menuSwitcher
      }
    default:
      return state;
  }
}
