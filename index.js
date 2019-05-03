const { createQueue } = require('./queue')

const q = createQueue()

q.enqueue('1. item')
q.enqueue('2. item')
q.enqueue('3. item')

q.dequeue()
q.dequeue()

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Queue Example</h2>
      <p>result: ${q.peek()}</p>
    `
//console.log()
