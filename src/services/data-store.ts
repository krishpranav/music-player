import localforage from 'localforage';

localforage.config({
    name: 'Music Player',
    storeName: 'db',
})