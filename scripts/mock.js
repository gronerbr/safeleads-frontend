var jsonServer = require('json-server')
var server = jsonServer.create()
var db = {
"products":
  [
    {
      "id": 1,
      "name": "Fusion",
      "year": "2017/2017",
      "price": 91000.12,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "img": "http://s2.glbimg.com/Qh4HLCZ7DBbwwk7qR9Ch8RWquAU=/s.glbimg.com/jo/g1/f/original/2016/09/20/ford-fusion-111.jpg"
    },
    {
      "id": 2,
      "name": "Corolla",
      "year": "2017/2018",
      "price": 80000.00,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "img": "https://i.ytimg.com/vi/zD11h10aHjI/maxresdefault.jpg"
    },
    {
      "id": 3,
      "name": "Fusion",
      "year": "2017/2017",
      "price": 91000.12,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "img": "http://s2.glbimg.com/Qh4HLCZ7DBbwwk7qR9Ch8RWquAU=/s.glbimg.com/jo/g1/f/original/2016/09/20/ford-fusion-111.jpg"
    },
    {
      "id": 4,
      "name": "Corolla",
      "year": "2017/2018",
      "price": 80000.00,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "img": "https://i.ytimg.com/vi/zD11h10aHjI/maxresdefault.jpg"
    }
  ]
}

const mockServer = () => {
  const router = jsonServer.router(db)
  const middlewares = jsonServer.defaults()
  server.use(middlewares)
  server.use(router)
  server.listen(8080, function () {
    console.log('JSON Server is running')
  });
}

module.exports = mockServer;
