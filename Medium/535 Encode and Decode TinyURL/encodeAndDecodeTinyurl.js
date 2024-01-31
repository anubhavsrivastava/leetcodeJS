/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = btoa

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = atob

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */