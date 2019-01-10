/**
 * Sets up event listeners on the Browser.Page instance to maintain a set
 * of URLs that have started but never finished or failed.
 *
 * @param {Object} page
 * @return Object
 */
const createTracker = page => {
  const requests = new Set();
  const onStarted = request => requests.add(request);
  const onFinished = request => requests.delete(request);
  page.on("request", onStarted);
  page.on("requestfinished", onFinished);
  page.on("requestfailed", onFinished);
  return {
    urls: () => Array.from(requests).map(r => r.url()),
    dispose: () => {
      page.removeListener("request", onStarted);
      page.removeListener("requestfinished", onFinished);
      page.removeListener("requestfailed", onFinished);
    }
  };
};

/**
 * Adds information about timed out URLs if given message is about Timeout.
 *
 * @param {string} message error message
 * @param {Object} tracker ConnectionTracker
 * @returns {string}
 */
const augmentTimeoutError = (message, tracker) => {
  if (message.startsWith("Navigation Timeout Exceeded")) {
    const urls = tracker.urls();
    if (urls.length > 1) {
      message += `\nTracked URLs that have not finished: ${urls.join(", ")}`;
    } else if (urls.length > 0) {
      message += `\nFor ${urls[0]}`;
    } else {
      message += `\nBut there are no pending connections`;
    }
  }
  return message;
};

module.exports = { createTracker, augmentTimeoutError };
