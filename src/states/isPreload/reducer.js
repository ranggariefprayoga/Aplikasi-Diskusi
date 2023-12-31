import { ActionType } from './action';

export default function isPreloadReducer(isPreLoad = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreLoad;
    default:
      return isPreLoad;
  }
}
