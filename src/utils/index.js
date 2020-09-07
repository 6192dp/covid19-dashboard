export function getQueryStringValue(key) {
  return window.decodeURIComponent(
    window.location.search.replace(
      new RegExp(
        `^(?:.*[&\\?]${window
          .encodeURIComponent(key)
          .replace(/[\.\+\*]/g, "\\$&")}(?:\\=([^&]*))?)?.*$`,
        "i"
      ),
      "$1"
    )
  );
}
