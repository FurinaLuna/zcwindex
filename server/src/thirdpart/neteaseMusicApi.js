const { cloudsearch, playlist_detail, song_url } = require("NeteaseCloudMusicApi");

/**
 * 搜索音乐
 * @param keywords 关键词
 * @param limit 分页大小
 * @return {Promise<*[]>}
 */
async function searchMusics(keywords, limit = 10) {
  if (!keywords) {
    return [];
  }
  try {
    const result = await cloudsearch({
      keywords,
      type: 1,
      limit,
    });
    if (result.status !== 200) {
      return [];
    }
    const songs = result.body.result.songs;
    return songs ? songs : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

/**
 * 获取歌曲详情
 * @returns {Promise<ITrackElement>}
 */
async function playlistDetail() {
  // 热歌榜 id
  const HOT_SONGS_PLAY_LIST_ID = 3778678;
  const result = await playlist_detail({
    id: HOT_SONGS_PLAY_LIST_ID,
  });
  return result.body.playlist.tracks;
}

/**
 * 获取歌曲可播放地址
 * @param id
 * @return {Promise<string>}
 */
async function getSongUrl(id) {
  if (!id) {
    return "";
  }
  try {
    const result = await song_url({
      id,
      level: "standard",
    });
    if (result.status !== 200) {
      return "";
    }
    const url = result?.body?.data?.[0]?.url;
    return url || "";
  } catch (e) {
    console.log(e);
    return "";
  }
}

module.exports = {
  searchMusics,
  playlistDetail,
  getSongUrl,
};
