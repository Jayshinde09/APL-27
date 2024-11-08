const async = require('async');

async.series([ 
    (callback) => { 
        setTimeout(() => { 
            console.log('This is the First function'); 
            callback(null, 1); 
        }, 1500); 
    }, 
    (callback) => { 
        console.log('This is the Second function'); 
        callback(null, 2); 
    } 
], (err, results) => { 
    if (err) console.error(err); 
    console.log(results); 
});
