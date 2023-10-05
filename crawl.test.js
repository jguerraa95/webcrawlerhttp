const {normalizeURL,getURLsFromHTML} = require('./crawl.js')
const {test,expect} = require('@jest/globals')

test('normalize URL string procotol',()=>{
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected) 
})

test('getURLsFromHTML absolute',()=>{
    const bodyInput = `
<html>
    <body>
        <a href="https://blog.boot.dev/">
        Boot.dev Blog
        </a>
    </body>
</html>
`
    const inputBase = "https://blog.boot.dev"
    const actual = getURLsFromHTML(bodyInput,inputBase)
    const expected = ["https://blog.boot.dev/"]
    expect(actual).toEqual(expected) 
})

test('getURLsFromHTML relavite',()=>{
    const bodyInput = `
<html>
    <body>
        <a href="/path/">
        Boot.dev Blog
        </a>
    </body>
</html>
`
    const inputBase = "https://blog.boot.dev"
    const actual = getURLsFromHTML(bodyInput,inputBase)
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected) 
})

test('getURLsFromHTML relavite 2',()=>{
    const bodyInput = `
<html>
    <body>
        <a href="https://blog.boot.dev/path/1">
        Boot.dev Blog path one
        </a>
        <a href="https://blog.boot.dev/path/2">
        Boot.dev Blog path two
        </a>
    </body>
</html>
`
    const inputBase = "https://blog.boot.dev"
    const actual = getURLsFromHTML(bodyInput,inputBase)
    const expected = ["https://blog.boot.dev/path/1","https://blog.boot.dev/path/2"]
    expect(actual).toEqual(expected) 
})

test('getURLsFromHTML invalid',()=>{
    const bodyInput = `
<html>
    <body>
        <a href="invalid">
        Invalid
        </a>
    </body>
</html>
`
    const inputBase = "https://blog.boot.dev"
    const actual = getURLsFromHTML(bodyInput,inputBase)
    const expected = []
    expect(actual).toEqual(expected) 
})