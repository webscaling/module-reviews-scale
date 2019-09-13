/* eslint-disable func-style */
// module included to create worker threads
const { Worker } = require('worker_threads');
const timerFn = require('timer-node');
const timer = timerFn('test-timer');

// main attributes
let lst; // list will be populated from 0 to n
let index = -1; // index will be used to traverse list
let myWorker; // worker reference
let interval;

mainBody();

function mainBody () {
  console.log('Main Thread Started');

  // filling array with 100 items
  // initiating worker process
  // for (let j = 0; j < 2; j++)
  timer.start();
  initiateWorker();
  initiateWorker();
  
  
}


// Defining callback method for receiving data or error on worker thread
function initiateWorker () {

  // define callback
  let cb = (err, result) => {
    if (err) { return console.error(err); }

    console.log('Updated List From worker: ', result);
    
  };

  // start worker
  myWorker = startWorker(__dirname + '/workerT.js', cb);

  // post a multiple factor to worker thread
  // myWorker.postMessage({ multipleFactor: getRandomArbitrary(3, 9) });
}

function startWorker(path, cb) {
  // sending path and data to worker thread constructor
  let w = new Worker(path);
  console.log('WOrker INITIATED!');

  // registering events in main thread to perform actions after receiving data/error/exit events
  // w.on('message', (msg) => {
  //   // data will be passed into callback
  //   cb(null, msg);
  // });

  // for error handling
  w.on('error', cb);

  // for exit
  w.on('exit', (code) => {
    if (code !== 0) {
      console.error(new Error(`Worker stopped Code ${code}`));
    }
    timer.stop();
    console.log('completed worker JOB! Time in ms: ' + timer.milliseconds());
  });
  return w;
}

// for generating a random number between min and max
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}