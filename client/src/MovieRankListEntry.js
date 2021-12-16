// TODO: 하드코딩된 데이터를 동적으로 렌더링 되도록 다시 작성합니다.

export default function MovieRankListEntry({ item }) {
  return (
    <div className='card'>
      <div style={{ flex: 3 }}>
        <img width='100%' height='100%' src='https://yts.lt/assets/images/movies/avengers_infinity_war_2018/medium-cover.jpg' />
      </div>
      <div style={{ flex: 7 }}>
        <h3 className='title'>{item.title}</h3>
        <p className='rating'>{item.rating}</p>
        <p className='running-time'>{item.runtime}</p>
        <p>Genres</p>
        <div className='tag-list'>
          <div className='tag'>{item.map(genres => genres.genres)}</div>
          {/* <div className='tag'>{item.genres[1]}</div> */}
        </div>
      </div>
    </div>
  );
}
