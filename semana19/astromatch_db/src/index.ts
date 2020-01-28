import {Endpoints, Event} from "./presentation";


exports.handler = async (event: Event) => {
  switch (event.path) {
    case "/signup":
      return Endpoints.signUp("/signup", {
        path: event.path,
        name: event.name,
        email: event.email,
        dateOfBirth: event.dateOfBirth,
        picture: event.picture,
        password: event.password
      });
    default:
      return;
  }

};

