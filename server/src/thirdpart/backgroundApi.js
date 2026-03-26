const axios = require("axios");

/**
 * 随机获取背景
 * @return {Promise<*[]>}
 */
async function getRandomBackground() {
  const api = "https://api.btstu.cn/sjbz/api.php?lx=dongman&format=json";
  try {
    const res = await axios.get(api, { timeout: 5000 });
    return res.data.imgurl;
  } catch (e) {
    // 备用地址，防止接口失效
    return "https://img.xjh.me/random_img.php?type=bg&ctype=nature&return=302";
  }
}

module.exports = {
  getRandomBackground,
};
