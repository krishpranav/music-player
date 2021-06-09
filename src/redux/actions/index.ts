import {
  T_ADD_SONGS,
  T_PLAY_SONG,
  T_PAUSE_SONG,
  T_RESUME_SONG,
  T_REMOVE_SONGS,
  T_SET_GRID,
  T_SET_THEME,
  T_SET_REPEAT,
  T_SET_VISUALIZER,
  T_SET_VIEW,
} from '../types';

// add songs function
export const ADD_SONGS = (songs: any) => ({
    type: T_ADD_SONGS,
    songs,
});

// delete song function
export const DELETE_SONGS = (index: any) => ({
    type: T_REMOVE_SONGS,
    index,
});

// const play song function
export const PLAY_SONG = (index: number) => ({
    type: T_PLAY_SONG,
    index,
});

// const pause song function
export const PAUSE_SONG = () => ({
    type: T_PAUSE_SONG,
});

export const RESUME_SONG = () => ({
    type: T_RESUME_SONG,
});

export const SET_GRID = (value: boolean) => ({
    type: T_SET_VISUALIZER,
    value,
});