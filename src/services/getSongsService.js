export default class getSongsService{
  data = [
    {
      id: 1,
      artist: 'Slipknot',
      song: 'Wait and bleed',
      genre: 'Nu-metal',
      year: 1999
    },
    {
      id: 2,
      artist: 'Korn',
      song: 'Falling Away from Me',
      genre: 'Nu-metal',
      year: 1999
    },
    {
      id: 3,
      artist: 'Slipknot',
      song: '(SIC)',
      genre: 'Nu-metal',
      year: 1999
    },
    {
      id: 4,
      artist: 'Pantera',
      song: 'I’m Broken',
      genre: 'Groove metal',
      year: 1994
    },
    {
      id: 5,
      artist: 'Pantera',
      song: 'Mouth for War',
      genre: 'Groove metal',
      year: 1992
    },   
  ];

  getChart = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.95) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
} 