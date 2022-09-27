# blog-reading-time
[![Version](http://img.shields.io/npm/v/blog-reading-time.svg)](https://www.npmjs.org/package/blog-reading-time)

<br>

Blog reading time estimation.

`blog-reading-time` helps you estimate how long an article will take to read.
It works perfectly with plain text, but also with `markdown` or `html`.

Note that it's focused on performance and simplicity, so the number of words it will extract from other formats than plain text can vary a little. But this is an estimation right?

> **Note**
> `blog-reading-time` it just returns number value!

## Installation

```sh
npm i blog-reading-time
```

## Usage

### React App

```js
import getReadingTime from 'blog-reading-time';

function App() {

    const text = "this is a sample text";

    return (
        <div>{getReadingTime(text)} min read</div>
    )
}
```

### Console

```js
import getReadingTime from 'blog-reading-time';

const text = "this is a sample text";

console.log(`${getReadingTime(text)} min read`); 
```

## API

### `getReadingTime(text)`

- `text`: the text to analyze

