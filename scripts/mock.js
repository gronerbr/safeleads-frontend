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
      "images": [
        {
          "src": "http://s2.glbimg.com/Qh4HLCZ7DBbwwk7qR9Ch8RWquAU=/s.glbimg.com/jo/g1/f/original/2016/09/20/ford-fusion-111.jpg",
          "title": "lorem ipsum dolor sit ammet",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ],
      "videos": [
        {
          "youtube": "https://www.youtube.com/watch?v=5RWS-Kq1kgs",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        },
        {
          "youtube": "https://www.youtube.com/watch?v=5f_jKEmlkTU",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ]
    },
    {
      "id": 2,
      "name": "Corolla",
      "year": "2017/2018",
      "price": 80000.00,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "images": [
        {
          "src": "https://1.bp.blogspot.com/-isC8efsuPzI/WFsBTfWML9I/AAAAAAACgKI/WwVPk9_3ThkWYzGDMzIEsxX8pvIjEVKZQCLcB/s1600/Toyota-Corolla-Furia-2018%2B%25283%2529.jpg",
          "title": "lorem ipsum dolor sit ammet",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ],
      "videos": [
        {
          "youtube": "https://www.youtube.com/watch?v=5RWS-Kq1kgs",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        },
        {
          "youtube": "https://www.youtube.com/watch?v=5f_jKEmlkTU",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ]
    },
    {
      "id": 3,
      "name": "Fusion",
      "year": "2017/2017",
      "price": 91000.12,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "images": [
        {
          "src": "http://s2.glbimg.com/Qh4HLCZ7DBbwwk7qR9Ch8RWquAU=/s.glbimg.com/jo/g1/f/original/2016/09/20/ford-fusion-111.jpg",
          "title": "lorem ipsum dolor sit ammet",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ],
      "videos": [
        {
          "youtube": "https://www.youtube.com/watch?v=5RWS-Kq1kgs",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        },
        {
          "youtube": "https://www.youtube.com/watch?v=5f_jKEmlkTU",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ]
    },
    {
      "id": 4,
      "name": "Corolla",
      "year": "2017/2018",
      "price": 80000.00,
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed pretium metus, vel vehicula sem. Praesent vel dolor justo. Ut nulla ante, tincidunt sed diam semper, venenatis fringilla odio. Quisque a arcu id lorem tincidunt molestie. Nam ut massa ut libero viverra dictum. Vivamus at facilisis urna, sit amet congue tellus. Nullam sodales et justo non tincidunt",
      "images": [
        {
          "src": "https://precoscarros.com.br/wp-content/uploads/2017/10/Novo-Corolla-2019-02.jpg",
          "title": "lorem ipsum dolor sit ammet",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ],
      "videos": [
        {
          "youtube": "https://www.youtube.com/watch?v=5RWS-Kq1kgs",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        },
        {
          "youtube": "https://www.youtube.com/watch?v=5f_jKEmlkTU",
          "title": "adasdas",
          "desc": "lorem ipsum dolor sit ammet"
        }
      ]
    }
  ]
}

const mockServer = () => {
  const router = jsonServer.router(db)
  const middlewares = jsonServer.defaults()
  server.use(middlewares)
  server.use(router)
  server.listen(process.env.PORT || 8080, function () {
    console.log('JSON Server is running')
  });
}
mockServer();
module.exports = mockServer;
