// 프로그래머스
// 베스트 앨범

// 내 풀이

function solution(genres, plays) {
  const genreMap = new Map();

  const temps = genres.map((genre, index) => [genre, plays[index]]);

  temps.map(([genre, play], index) => {
    const data = genreMap.get(genre) || { total: 0, songs: [] };

    genreMap.set(genre, {
      total: data.total + play,
      songs: [...data.songs, { play, index }]
        .sort((a, b) => b.play - a.play)
        .slice(0, 2),
    });
  });

  const result = [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap(item => item[1].songs)
    .map(song => song.index);

  return result;
}

const genres = ['classic', 'pop', 'classic', 'classic', 'pop'];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays)); // [ 4, 1, 3, 0 ]
