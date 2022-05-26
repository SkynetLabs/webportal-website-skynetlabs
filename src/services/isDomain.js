import currentDomain from "./currentDomain";

// check whether current domain equals the expect domain
export default function isDomain(domain) {
  return currentDomain === domain;
}
