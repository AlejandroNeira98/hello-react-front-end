const url = 'http://[::1]:3000/greetings/show';

const FETCH_GREETINGS = 'react_group_task/greetings/FETCH_GREETINGS';

export default function greetingReducer(state = "", action) {
  switch (action.type) {
    case FETCH_GREETINGS:
      return action.data.msg
    default:
      return state;
  }
}

export function getGreeting() {
  return async (dispatch) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_GREETINGS, data });
      });
  };
}