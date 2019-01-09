import { config } from "./Config";
import app from "firebase/app";

export default class InitFirebase {
  private isInitialized = false;

  constructor() {
    if (!this.isInitialized) {
      app.initializeApp(config);
      this.isInitialized = true;
    }
  }

  getAll() {
    // return app
    //   .database()
    //   .ref("/collection")
    //   .once("value")
    //   .then((snapshot) => {
    //     console.log(snapshot)
    //   });
  }
}
