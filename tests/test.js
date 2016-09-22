import Muscat from '../src/muscat.js'

describe('', () => {
  it('', () => {
    Muscat
    .instance()
    .setup('node_modules/kuromoji/dict')
    .parse('常に最新で、最高のモバイル。Androidを開発した同じチームから。')
    .then((result) => {
      console.log(result)
      done()
    })
  })
})
