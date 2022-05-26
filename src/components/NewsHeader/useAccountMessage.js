import * as React from "react";
import useAccounts from "../../services/useAccounts";
import isDomain from "../../services/isDomain";

const isSkynetPro = isDomain("skynetpro.net");
const isSkynetFree = isDomain("skynetfree.net");

function getSkynetFreeMessage(isAuthenticated, hasSubscription) {
  const authenticatedFreeTier = (
    <>
      Download faster and store up to 20TB with a <span className="font-bold !text-orange-500 mx-1">skynetpro.net</span>{" "}
      subscription
    </>
  );

  const authenticatedPaidTier = (
    <>
      Looks like you're a paid subscriber! Head over to{" "}
      <span className="font-bold !text-orange-500 mx-1">skynetpro.net</span> to access your account
    </>
  );

  // null target and rel to open up in the same window
  const link = { href: "https://skynetpro.net", target: null, rel: null };

  // skynetfree.net user authenticated on free tier
  if (isAuthenticated && !hasSubscription) {
    return { link, title: authenticatedFreeTier };
  }

  // skynetfree.net user authenticated and with subscription
  if (hasSubscription) {
    return { link, title: authenticatedPaidTier };
  }

  return { link: null, title: null };
}

function getSkynetProMessage(isAuthenticated, hasSubscription) {
  const authenticatedFreeTier = (
    <>
      Not ready for a paid subscription? Use your account on{" "}
      <span className="font-bold !text-orange-500 mx-1">skynetfree.net</span> to store up to 100GB
    </>
  );

  const unauthenticated = (
    <>
      Download faster and store up to 20TB with a <span className="font-bold !text-orange-500 mx-1">skynetpro.net</span>{" "}
      subscription
    </>
  );

  // null target and rel to open up in the same window
  const link = { href: null, target: null, rel: null };

  // skynetpro.net user authenticated on free tier
  if (isAuthenticated && !hasSubscription) {
    return { link: { ...link, href: "https://skynetfree.net" }, title: authenticatedFreeTier };
  }

  // skynetpro.net unauthenticated user
  if (!isAuthenticated) {
    return { link: { ...link, href: "https://account.skynetpro.net/auth/registration" }, title: unauthenticated };
  }

  return { link, title: null };
}

export default function useAccountMessage() {
  const { data: accounts } = useAccounts();

  const isAuthenticated = accounts?.authenticated === true;
  const hasSubscription = accounts?.subscription === true;

  return React.useMemo(() => {
    if (isSkynetPro) {
      return getSkynetProMessage(isAuthenticated, hasSubscription);
    }

    if (isSkynetFree) {
      return getSkynetFreeMessage(isAuthenticated, hasSubscription);
    }

    // none of supported servers
    return { link: null, title: null };
  }, [isAuthenticated, hasSubscription]);
}
