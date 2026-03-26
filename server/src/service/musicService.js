const {
  searchMusics,
  playlistDetail,
  getSongUrl,
} = require("../thirdpart/neteaseMusicApi");

/**
 * 获取单首音乐
 * @param keywords
 */
async function getSingleMusic(keywords) {
  const songs = await searchMusics(keywords, 1);
  if (songs.length < 1) {
    return null;
  }
  const song = songs[0];
  const url = await getSongUrl(song.id);
  return {
    ...song,
    url,
  };
}

/**
 * 获取歌单详情
 * @returns {Promise<ITrackElement>}
 */
async function getPlaylistDetail() {
  return await playlistDetail();
}

module.exports = {
  getSingleMusic,
  getPlaylistDetail,
};
