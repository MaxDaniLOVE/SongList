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
    {
      id: 6,
      artist: 'Korn',
      song: 'Blind',
      genre: 'Nu-metal',
      year: 1994
    },
    {
      id: 7,
      artist: 'Sepultura',
      song: 'Roots Bloody Roots',
      genre: 'Alternative',
      year: 1996
    }, 
    {
      id: 8,
      artist: 'Metallica',
      song: 'Sad But True',
      genre: 'Thrash metal',
      year: 1991
    },
    {
      id: 9,
      artist: 'Nine Inch Nails',
      song: 'Closer',
      genre: 'Industrial',
      year: 1994
    }, 
    {
      id: 10,
      artist: 'Soundgarden',
      song: 'Black Hole Sun',
      genre: 'Grange',
      year: 1994
    },
    {
      id: 11,
      artist: 'Nirvana',
      song: 'Smells Like Teen Spirit',
      genre: 'Grange',
      year: 1991
    }, 
    {
      id: 12,
      artist: 'Alice In Chains',
      song: 'Rooster',
      genre: 'Grange',
      year: 1992
    },
    {
      id: 13,
      artist: 'Deftones',
      song: 'My Own Summer',
      genre: 'Nu-metal',
      year: 1997
    }, 
    {
      id: 14,
      artist: 'Marilyn Manson',
      song: 'The Beautiful People',
      genre: 'Alternative',
      year: 1996
    },
    {
      id: 15,
      artist: 'Pantera',
      song: 'Floods',
      genre: 'Groove metal',
      year: 1992
    }, 
    {
      id: 16,
      artist: 'Megadeth',
      song: 'Hangar 18',
      genre: 'Thrash metal',
      year: 1990
    },
    {
      id: 17,
      artist: 'Judas Priest',
      song: 'Painkiller',
      genre: 'Heavy metal',
      year: 1990
    }, 
    {
      id: 18,
      artist: 'Rammstein',
      song: 'Du Hast',
      genre: 'Industrial',
      year: 1997
    },
    {
      id: 19,
      artist: 'Guns N’ Roses',
      song: 'You Could Be Mine',
      genre: 'Heavy metal',
      year: 1991
    }, 
    {
      id: 20,
      artist: 'Pearl Jam',
      song: 'Alive',
      genre: 'Grunge',
      year: 1994
    },
    {
      id: 21,
      artist: 'The Prodigy',
      song: 'Firestarter',
      genre: 'Techno',
      year: 1997
    }, 
    {
      id: 22,
      artist: 'Rob Zombie',
      song: 'Dragula',
      genre: 'Alternative',
      year: 1998
    },
    {
      id: 23,
      artist: 'Body Count',
      song: 'Cop Killer',
      genre: 'Rap-core',
      year: 1992
    }, 
    {
      id: 24,
      artist: 'Korn',
      song: 'Freak On A Leash',
      genre: 'Nu-metal',
      year: 1998
    },
    {
      id: 25,
      artist: 'Slayer',
      song: 'Dead Skin Mask',
      genre: 'Death metal',
      year: 1990
    }
  ];

  getChart = () => {
    return fetch('http://localhost:3000/')
      .then((res) => res.json()) // try to load data from node.js server
      .catch((err) => { // load static data if an error
        console.error('static data will be loaded...', err);
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(this.data);
          }, 700);
        });
      })
  }
}