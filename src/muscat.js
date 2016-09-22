import 'babel-polyfill'
import Kuromoji from 'kuromoji'

let _instance = null

export default class Muscat {

  static instance() {
    if (!_instance) {
      _instance = new Muscat()
    }
    return _instance
  }

  constructor() {
    this._tokenizer = null
  }

  setup(dicPath) {
    this._tokenizer = new Promise((resolve, reject) => {
      Kuromoji
      .builder({dicPath})
      .build((error, tokenizer) => {
        if (tokenizer) {
          resolve(tokenizer)
          return
        }
        reject(error)
      })
    })
    return this
  }

  parse(string, classname = 'ww') {
    return this._tokenizer.then((tokenizer) => {
      return this._parseInternal(tokenizer, string, classname)
    })
  }

  _parseInternal(tokenizer, string, classname) {
    return new Promise((resolve, _) => {
      const result = tokenizer.tokenize(string)
      const words = new Set([
        '、'
      ])
      const poses = new Set([
        '助詞',
        '助動詞',
        '記号',
      ])
      const chunks = result.reduce((previous, current) => {
        const form = current['surface_form']
        const pos = current['pos']
        if ((words.has(form) || poses.has(pos)) && 0 < previous.length) {
          previous[previous.length - 1] += form
          return previous
        }
        previous.push(form)
        return previous
      }, [])
      const html = chunks.reduce((previous, current) => {
        return previous + `<span class="${classname}">${current}</span>`
      }, '')
      resolve({
        chunks,
        html_code: html,
      })
    })
  }
}
