import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";
//const isLocal = false;

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({
    dsn: "https://5f83aa2e21064e47bab8a1f308f940eb@sentry.io/5185720",
  });
}

export function onError(error) {
  let message = error.toString();

  //  if (!(error instanceof Error) && error.message) {
  //    message = error.message;
  //  }

  let errorInfo = {};

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.path) {
    errorInfo.path = error.config.path;
  }

  logError(error, errorInfo);

  alert(message);
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtras(errorInfo);
    Sentry.captureException(error);
  });
}
