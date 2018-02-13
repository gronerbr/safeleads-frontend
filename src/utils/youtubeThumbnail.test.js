import youtubeThumbnail from './youtubeThumbnail';

describe('youtubeThumbnail', () => {
  it('should return false when not found', () => {
    expect(youtubeThumbnail()).toBe(false);
  });
  it('should return the video id when the url is shortner', () => {
    const shortUrl = 'https://youtu.be/lgJOJAmXlBw';
    expect(youtubeThumbnail(shortUrl)).toBe('https://img.youtube.com/vi/lgJOJAmXlBw/sddefault.jpg');
  });
  it('should return the video id when receive a default youtube url', () => {
    const url = 'https://www.youtube.com/watch?v=lgJOJAmXlBw';
    expect(youtubeThumbnail(url)).toBe('https://img.youtube.com/vi/lgJOJAmXlBw/sddefault.jpg');
  });
});

