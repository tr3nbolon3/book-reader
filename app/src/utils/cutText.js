export default (text, maxLen = 38) => (text.length > maxLen ? `${text.substring(0, maxLen - 3)}...` : text);
