export const getSongList = state => (state.songList && state.songList.entities) || [];

export const getIsLoading = state => (state.songList && state.songList.isLoading) || false;
