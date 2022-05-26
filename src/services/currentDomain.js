// get current top level domain (no subdomains)
const hostname = typeof window !== "undefined" ? window.location.hostname : "";

export default hostname.substring(hostname.lastIndexOf(".", hostname.lastIndexOf(".") - 1) + 1);
