import store from "./store";

async function api_get(path) {
  let text = await fetch("http://localhost:4000/api/v1" + path, {});
  let resp = await text.json();
  return resp.data;
}

async function api_post(path, data) {
  let opts = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  let resp = await fetch("http://localhost:4000/api/v1" + path, opts);
  return await resp.json();
}

export function fetch_users() {
  api_get("/users").then((data) =>
    store.dispatch({
      type: "users/set",
      data: data,
    })
  );
}

export function get_user_by_id(user_id){
    api_get("/users/" + user_id).then((data) =>
    store.dispatch({
        type: "user/view",
        data: data,
    }))
}

export function create_user(user) {
  return api_post("/users", { user });
}

export function fetch_events() {
  api_get("/events").then((data) =>
    store.dispatch({
      type: "events/set",
      data: data,
    })
  );
}

export function create_event(event) {
  return api_post("/events", { event });
}

export function api_login(name, password) {
  api_post("/session", { name, password }).then((data) => {
    console.log("login resp", data);
    if (data.session) {
      let action = {
        type: "session/set",
        data: data.session,
      };
      store.dispatch(action);
    } else if (data.error) {
      let action = {
        type: "error/set",
        data: data.error,
      };
      store.dispatch(action);
    }
  });
}

export function load_defaults() {
  fetch_users();
  fetch_events();
}
