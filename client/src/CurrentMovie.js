// TODO: 하드코딩된 데이터를 동적으로 렌더링 되도록 다시 작성합니다.

export default function CurrentMovie({ movie }) {
  return (
    movie === null ?
      "영화를 선택하세요" :
      <>
        <div className='left-current-side'>
          <div className='current-movie'>
            <h1 className='title'>{movie.title}</h1>
            <img
              className='thumbnail'
              src={movie.medium_cover_image}
              alt='profile'
            />
            <p className='rating'>{movie.rating}</p>
            <p className='running-time'>{movie.runtime}</p>
            <p>description</p>
            <p className='description'>
              {movie.description_full}
            </p>
          </div>
        </div>
      </>
  );
}
