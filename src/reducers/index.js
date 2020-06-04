import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {title: 'One', duration: '4.45'},
        {title:'Money for Nothing', duration: '3.05'},
        {title: 'Sultans of Swing', duration: '5.02'},
        {title: 'Pride and Joy', duration: '5.01'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});