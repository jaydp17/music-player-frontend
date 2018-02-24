export const isSongIdPlaying = state => songId => state.playing.songId === songId;

export const getListenerCount = state => songId => state.listeners[songId] || 0;
