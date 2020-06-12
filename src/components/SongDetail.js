import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    //console.log(props);
    if (!song) {
        return <div>Please select a song from the list</div>;
    }
    return (
    <div>
        <h3>Details of the Song</h3>
        <p>Title: { song.title }</p>
        <p>Duration: { song.duration } </p>
    </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
};

export default connect(mapStateToProps)(SongDetail);