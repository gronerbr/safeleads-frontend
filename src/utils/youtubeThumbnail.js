const youtubeThumbnail = (url) => {
  const videoUrl = String(url);
  const videoMatches = videoUrl.match(/(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^?&"'>]+)/);
  if (videoMatches) {
    return `https://img.youtube.com/vi/${videoMatches[5]}/sddefault.jpg`;
  }
  return false;
};
export default youtubeThumbnail;
