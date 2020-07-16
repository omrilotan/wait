/**
* A waiting promise
* @param  {Number} ms
* @return {Promise}
*/
export default ms => new Promise(
	resolve => setTimeout(resolve, ms)
);