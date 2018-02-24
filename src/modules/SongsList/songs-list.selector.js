export const getSongList = state => Object.values(state.songsList.entities) || [];

export const getIsLoading = state => state.songsList.isLoading || false;
