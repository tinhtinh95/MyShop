import * as TABLE from "./Tables";
var Realm = require("realm");

export function getDataFromDB(table) {
  return realm.objects(table);
}
export function isExistData(id, table) {
  let items = getDataFromDB(table);
  for (let i = 0; i < items.length; i++) {
    if (id === items[i].id) {
      return true;
    }
  }
  return false;
}
export function addFavourite(movie) {
  try {
    realm.write(() => {
      realm.create(
        "Movie",
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average.toString(),
          overview: movie.overview
        },
        true
      );
    });
    console.log("addFavourite");
  } catch (e) {
    console.log("Error on creation");
  }
}

export function removeFavourite(movie) {
  try {
    realm.write(() => {
      let movieDelete = realm.objects("Movie").filtered(`id==${movie.id}`);
      if (movieDelete.isValid()) {
        realm.delete(movieDelete);
      }
    });
    console.log("removeFavourite");
  } catch (e) {
    console.log("Error on remove");
  }
}
export function getReminderTime(id) {
  let value = "";
  try {
    realm.write(() => {
      let reminder = realm.objects("Reminder").filtered(`id==${id}`);
      value = reminder[0].reminderTime;
    });
  } catch (error) {
    value = "";
  }

  return value;
}
export function addReminder(movie, time) {
  try {
    realm.write(() => {
      realm.create(
        "Reminder",
        {
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          release_date: movie.release_date,
          vote_average: movie.vote_average.toString(),
          overview: movie.overview,
          reminderTime: time
        },
        true
      );
    });
  } catch (error) {
    console.log("Update", error);
  }
}

export function removeReminder(id) {
  try {
    realm.write(() => {
      let reminderRemove = realm.objects("Reminder").filtered(`id==${id}`);
      realm.delete(reminderRemove);
    });
    console.log("remove Reminder");
  } catch (error) {
    console.log("Error on remove");
  }
}

export function updateProfileInfo(_id, _userName, _email, _doB, _sex, _avt) {
  console.log('updateProfileInfo',
    _id, _userName, _email, _doB, _sex, _avt
  );
  try {
    realm.write(() => {
      realm.create(
        "User",
        {
          id: _id,
          username: _userName,
          email: _email,
          doB: _doB,
          sex: _sex,
          avt: _avt
        },
        true
      );
      console.log("updateProfileInfo");
    });
  } catch (error) {
    console.log("updateProfileInfo error");
  }
}

export function getProfileInfo() {
  let value = {};
  try {
    realm.write(() => {
      let reminder = realm.objects("User");
      value = reminder[0];
      console.log("getProfileInfo ", value);
    });
  } catch (error) {
    value = {};
  }
  return value;
}

// Initialize a Realm with models
export const realm = new Realm({
  schema: [TABLE.MovieSchema, TABLE.UserInfoSchema, TABLE.ReminderSchema]
});
