module.exports = function () {
	const _prepareStackTrace = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, stack) => stack;
	Error.stackTraceLimit = 100;
	const stack = new Error().stack.slice(1); // eslint-disable-line unicorn/error-message
	Error.prepareStackTrace = _prepareStackTrace;
	return stack;
};
