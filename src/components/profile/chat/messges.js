
module.exports = [
  {
    _id: Math.round(Math.random() * 1000000),
    text: 'Great',
    createdAt: new Date(Date.UTC(2018, 0, 17, 17, 20, 0)),
    user: {
      _id: 1,
      name: 'Developer',

    },
    sent: true,
    received: true,
    // location: {
    //   latitude: 48.864601,
    //   longitude: 2.398704
    // },
  },
  {
    _id: Math.round(Math.random() * 1000000),
    text: "Me too, i'm just eating my lunch",
    createdAt: new Date(Date.UTC(2018, 0,17, 17, 20, 0)),
    user: {
      _id: 2,
      name: 'Bake Hodson',

    },
  },
  // {
  //   _id: Math.round(Math.random() * 1000000),
  //   text: "Qalorie",
  //   createdAt: new Date(Date.UTC(2018, 0, 15, 17, 20, 0)),
  //   system: true,
  // },
];