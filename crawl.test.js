const {normalizeURL} = require('./crawl.js')
const {test,expect} = require('@jest/globals')

test('normalize URL string procotol',()=>{
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected) 
})
