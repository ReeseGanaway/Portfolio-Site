import { createSlice } from "@reduxjs/toolkit";
import { initialRoster } from "./initialStateConstants";

const initialState = initialRoster;

export const roster = createSlice({
  name: "roster",
  initialState,
  reducers: {
    addHeroCollection(state, action) {
      const { id, spriteSheet } = action.payload;

      if (id != null && spriteSheet != null) {
        return {
          ...state,
          collection: {
            ...state.collection,
            [action.payload.id]: action.payload,
          },
        };
      }
    },
    addActiveChar(state, action) {
      const { id, spriteSheet } = action.payload;

      if (id != null && spriteSheet != null) {
        return {
          ...state,
          activeRoster: {
            ...state.activeRoster,
            [action.payload.id]: action.payload,
          },
        };
      }
    },
    deleteActiveChar(state, action) {
      let newState = { ...state };
      delete newState.activeRoster[action.payload];
      return void newState;
    },
    setActiveRoster(state, action) {
      return { ...state, activeRoster: action.payload };
    },
    resetActiveRoster(state, action) {
      return {
        ...state,
        activeRoster: {},
      };
    },
    updateXY(state, action) {
      const id = action.payload.id;
      if (id !== undefined) {
        return {
          ...state,
          activeRoster: {
            ...state.activeRoster,
            [id]: {
              ...state.activeRoster[id],
              x: action.payload.x,
              y: action.payload.y,
            },
          },
        };
      }
    },
    resetRoster(state, action) {
      return initialRoster;
    },
  },
});

export const {
  addHeroCollection,
  addActiveChar,
  deleteActiveChar,
  setActiveRoster,
  resetActiveRoster,
  updateXY,
  resetRoster,
} = roster.actions;
