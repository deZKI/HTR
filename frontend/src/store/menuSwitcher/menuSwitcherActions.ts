import {ActionCreator} from "redux";

export const SET_MENU_SWITCHER = 'SET_MENU_SWITCHER';

export type SetMenuSwitcherAction = {
  type: typeof SET_MENU_SWITCHER;
  menuSwitcher: boolean;
}

export const setMenuSwitcher: ActionCreator<SetMenuSwitcherAction> = (menuSwitcher) => ({
  type: SET_MENU_SWITCHER,
  menuSwitcher
})
