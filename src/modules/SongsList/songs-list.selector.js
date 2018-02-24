export const getSongList = state => {
  return (state.songList && state.songList.entities) || [];
};

export const getIsLoading = state => (state.songList && state.songList.isLoading) || false;
