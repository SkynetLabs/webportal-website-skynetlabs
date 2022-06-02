import * as React from "react";
import skynetClient from "./skynetClient";
import isDomain from "../services/isDomain";

export default function useAccountsUrl() {
  const [url, setUrl] = React.useState("");
  const createAccountsUrl = React.useCallback(
    (path = "") => {
      if (isDomain("siasky.net")) return "/siasky-account-notice"; // hardcode to account notice page

      return url && new URL(path, url).toString();
    },
    [url]
  );

  React.useEffect(() => {
    (async function resolve() {
      const portalUrl = new URL(await skynetClient.portalUrl());

      portalUrl.host = `account.${portalUrl.host}`;

      setUrl(portalUrl.toString());
    })();
  }, [setUrl]);

  return createAccountsUrl;
}
