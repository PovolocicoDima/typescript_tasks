const myPromise = delay =>
  new Promise((res, rej) => {
    setTimeout(res, delay)
  })
setTimeout(() => console.log('in setTimeout1'), 1000)
myPromise(1000).then(res => console.log('in Promise 1'))
setTimeout(() => console.log('in setTimeout2'), 100)

myPromise(2000).then(res => console.log('in Promise 2'))
setTimeout(() => console.log('in setTimeout3'), 2000)
myPromise(1000).then(res => console.log('in Promise 3'))
setTimeout(() => console.log('in setTimeout4'), 1000)

myPromise(5000).then(res => console.log('in Promise '))

// основной -
// микро    - 'in Promise 1' -> (1000), 'in Promise 2' -> (2000), 'in Promise 3'->(1000), 'in Promise ' -> (5000)
// макро    - 'in setTimeout1'(1000), , 'in setTimeout2'(100), 'in setTimeout3'->(2000), 'in setTimeout4'->(1000)

// promise1
// time1
// time2
// promise2
// promise3
// time3
// time4
// promise
