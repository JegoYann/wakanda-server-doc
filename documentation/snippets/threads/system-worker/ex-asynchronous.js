var workerProxy = new SystemWorker( 'sh -c ls -la /Users/<user>/Desktop' );
workerProxy.onerror = function ( event ) {      
    console.log( event.type +': '+ event.data.toString() );
}
workerProxy.onmessage = function ( message ) {      
    console.log( event.type +': '+ event.data.toString() );
}
workerProxy.onterminated = function ( event ) {
    console.log( event.type +': with exitStatus:'+ event.exitStatus );
}
// For testing purpose, wait for the worker to end. This makes it very similar to SystemWorker.exec().
// In real application, keep working with callbacks and do not pause the current thread
workerProxy.wait();