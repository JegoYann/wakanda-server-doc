var workerResult = SystemWorker.exec( 'sh -c ls -la /Users/<user>/Desktop' );
console.log( workerResult.output.toString() );
