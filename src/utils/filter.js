export default function filter(songList, artistFilter, genreFilter, yearFilter) {
  const sortedByArtist = songList.filter(({artist}) => {
    if (artistFilter === 'All') {
      return true;
    }
    return artist === artistFilter;
  });
  const sortedByGenre = sortedByArtist.filter(({genre}) => {
    if (genreFilter === 'All') {
      return true;
    }
    return genre === genreFilter;
  });
  return sortedByGenre.filter(({year}) => {
    if (yearFilter === 'All') {
      return true;
    }
    return year.toString() === yearFilter;
  });
}