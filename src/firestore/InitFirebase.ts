import { config } from "./Config";
import * as firebase from "firebase/app";
import "firebase/database";
import { store } from "../redux/store";
import { Favorite } from '@material-ui/icons';

export interface IFirebaseStarDb {
  stars: number,
  url: string,
}

export default class InitFirebase {
  private latestSnapshot: IFirebaseStarDb[] | undefined = undefined
  private DbConnection: firebase.database.Database | undefined = undefined;
  private prevSubData: { stared: boolean, url: string, stars: number }[] = []

  constructor() {
    // bind eventlisteners
    this.onSubscribe = this.onSubscribe.bind(this);

    firebase.initializeApp(config);
    this.DbConnection = firebase.database();

    // Get all new data
    this.getAll();

    // listen for udpates
    store.subscribe(this.onSubscribe)
  }

  private onSubscribe() {
    const currSubData = store.getState()
      .collection.map(e => {
        return {
          stars: e.stars,
          stared: e.stared,
          url: e.url,
        }
      });

    for (let i = 0; i < currSubData.length; i++) {
      if (this.prevSubData[i] != undefined && currSubData[i].stared != this.prevSubData[i].stared) {
        this.toggleFavorite(
          {
            stars: currSubData[i].stars,
            url: currSubData[i].url
          },
          currSubData[i].stared,
          i
        )
      }
    }

    this.prevSubData = currSubData;
  }

  getAll() {
    if (this.DbConnection == undefined) return;
    return this.DbConnection
      .ref("/collection")
      .once("value")
      .then((snapshot) => {
        const values = snapshot.val() as IFirebaseStarDb[];
        this.latestSnapshot = values;
        console.log(values);
        // udpate store to fit data
        if (values != null) {
          store.dispatch(
            {
              type: "get_collection_stars",
              data: values.map(e => {
                return {
                  stars: e.stars,
                  url: e.url
                }
              })
            }
          )
        }
      });
    // return firebase.database;
  }

  // private toggleFavorite(favorite: IFirebaseStarDb, isAdded: boolean) {
  //   if (this.latestSnapshot != undefined && this.DbConnection != undefined) {
  //     for (let i = 0; i < this.latestSnapshot.length; i++) {
  //       if (favorite.url == this.latestSnapshot[i].url) {
  //         // now we know the index and can change the starlevel
  //         this.DbConnection.ref("/collection/" + i)
  //           .transaction((post: IFirebaseStarDb) => {
  //             if (isAdded) {
  //               post.stars += 1;
  //             } else {
  //               post.stars -= 1;
  //             }
  //           }, (error) => console.error(error))
  //       }
  //     }
  //   }
  // }

  private toggleFavorite(favorite: IFirebaseStarDb, isAdded: boolean, index: number) {
    if (this.DbConnection != undefined) {
      this.DbConnection.ref("/collection/" + index)
        .transaction((post: IFirebaseStarDb) => {
          if (post) {
            console.log(post);
            if (isAdded) {
              post.stars += 1;
            } else {
              post.stars -= 1;
            }
          }
          return post
        }, (error) => console.error(error))
    }
  }

  // addFavorite(favorite: IFirebaseStarDb) {
  //   this.toggleFavorite(favorite, true);
  // }

  // removeFavorite(favorite: IFirebaseStarDb) {
  //   this.toggleFavorite(favorite, false);
  // }
}
