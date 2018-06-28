## during refactor
- getElementProps('circle') (svg only) x 11 thousand ops/sec
- getElementProps('audio') (html and svg) x 21 thousand ops/sec
- getElementProps('label') (html only) x 914 thousand ops/sec
- getAllProps x 326 thousand ops/sec
- getGlobalProps() x 1,6 million ops/sec
- getEventProps() x 973 million ops/sec

## before refactor
- getAllProps x 31 thousand ops/sec
- getElementProps('label') x 35 thousand ops/sec
- getGlobalProps() x 1,6 million ops/sec
- getEventProps() x 926 million ops/sec