import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { roster } from "./slices/roster";
import { mode } from "./slices/mode";
import { saveData } from "./slices/saveData";

const reducers = combineReducers({
  roster: roster.reducer,
  mode: mode.reducer,
  saveData: saveData.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET") {
    console.log("here");
    // for all keys defined in your persistConfig(s)
    storage.removeItem("persist:root");
    // storage.removeItem('persist:otherKey')

    return reducers(undefined, action);
  }

  return reducers(state, action);
};

const persistConfig = {
  key: "counter",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
