import {Endpoints} from "./presentation";


exports.handler = async (event: any) => {
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
    case "/login":
      return Endpoints.login("/login", {
        path: event.path,
        email: event.email,
        password: event.password
    });
    default:
      return;
  }
};

