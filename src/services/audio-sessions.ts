import img from '../assets/logo512.png';

declare global {
    interface Window {
        MediaMetadata: any,
        jsmediatags:   any,
    }
}

const Navigator = window.navigator as any;

const isMediaSessionSupported = 'mediaSession' in navigator;
