const express = require('express');
const cors = require('cors');

// HINT: 영화 데이터는 다음 movies 변수를 이용하세요
const { movies } = require('./data.json');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/movies', (req, res) => {
  // TODO:
  return res.status(200).send(movies);
});

app.get('/movies/:id', (req, res) => {
  // TODO:
  const movie = movies.find(item => item.id === req.params.id) //요청된 id와 같은 id를 가지는 영화정보만 필터링함.
  if (movie) {
    return res.status(200).send(movie)
  } else {
    return res.status(404).send('조회하신 영화는 존재하지 않습니다.')
  }
})


// 테스트를 위한 코드입니다. 건드리지 마세요.
if (process.env.NODE_ENV !== 'test') {
  app.listen(3001, () => {
    console.log('server listen on 3001');
  });
}

module.exports = app;
