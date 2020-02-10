export default class getSongsService{
  data = [
    {
      id: 1,
      artist: 'Slipknot',
      song: 'Wait and bleed',
      genre: 'nu-metal',
      year: 1999},
    {
      id: 2,
      artist: 'Korn',
      song: 'Falling Away from Me',
      genre: 'nu-metal',
      year: 1999},
    {
      id: 3,
      artist: 'Slipknot',
      song: '(SIC)',
      genre: 'nu-metal',
      year: 1999},
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