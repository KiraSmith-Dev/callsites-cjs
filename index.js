module.exports = function () {
	const _prepareStackTrace = Error.prepareStackTrace;
	const _stackTraceLimit = Error.stackTraceLimit;
	
	Error.prepareStackTrace = (_, stack) => stack;
	Error.stackTraceLimit = 100;
	
	const stack = new Error().stack.slice(1); // eslint-disable-line unicorn/error-message
	
	Error.prepareStackTrace = _prepareStackTrace;
	Error.stackTraceLimit = _stackTraceLimit;
	
	return stack;
};
