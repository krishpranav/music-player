import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft } from 'react-icons/fa';

import { Header, Empty } from '../components';
import { useResize } from '../hooks';

import {
  ADD_SONGS,
  PLAY_SONG,
  PAUSE_SONG,
  RESUME_SONG,
  DELETE_SONG,
  SET_VIEW,
} from '../redux';

import AudioSession from '../services/audio-session';
import { Track, Menu, Home, NowPlaying, Playlist } from '../views';
import { setTheme } from '../utils';
import './styles.css';

function App() {

    const prevPlayState = useRef({ playing: false, index: -1 });

    const [ref, size] = useResize();

    const input = useRef(null);
    const audio = useRef(null);
    const dispatch = useDispatch();

    const { view } = useSelector((state: any) => state.app);
    const songs = useSelector((state: any) => state.songs);
    const settings = useSelector((state: any) => state.settings);
    const playState = useSelector((state: any) => state.playState);

    const [range, setRange] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const [searchText, setSearchText] = useState('');

    useMemo(() => setTheme(settings.light), [settings.light]);

    const filterSongs = useCallback(() => {
        if (!searchText) {
            return songs;
        } else {
            return songs.filter((s: any) =>
              s.name.toLowerCase().includes(searchText.toLowerCase()),
            );
        }
    }, [searchText, songs]);

}