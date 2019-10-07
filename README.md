# JavaScript Chinese Traditional / Simplified converter

This JS library is providing two simple functions to perform character replacements, converting between Traditional Chinese characters and Simplified Chinese characters.

The source of the list of characters is from Unihan, the data is being created by [lucene-zh-data](https://github.com/buda-base/lucene-zh-data/).

## API

```javascript
import {conv} from 'hanzi-tsconv';

console.log(conv.tc2sc("傌")); // shows 㐷
console.log(conv.sc2tc("㐷")); // shows 傌
```

## Copyright and License

The main JavaScript code and configuration is:

Copyright 2019 Buddhist Digital Resource Center, under [MIT License].

The character data correspondence is from [Unihan](https://unicode.org/charts/unihan.html), which disclaims:

```
 These data are provided as-is by Unicode, Inc. (The Unicode Consortium). No claims are made as to fitness for any particular purpose. No warranties of any kind are expressed or implied. The recipient agrees to determine applicability of information provided. 
```