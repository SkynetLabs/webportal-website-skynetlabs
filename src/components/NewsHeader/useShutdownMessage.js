import * as React from "react";
import isDomain from "../../services/isDomain";
import currentDomain from "../../services/currentDomain";

const isSiasky = isDomain("siasky.net");

const message = `On November 15th, ${currentDomain} will be shutting down. All paying users will receive refunds. Click here for more information.`;
const siaskyMessage = "On November 15th, siasky.net will be shutting down. Click here for more information.";

export default function useShutdownMessage() {
  return {
    link: { href: `https://skynetlabs.com/news/skynet-labs-full-shutdown`, target: null, rel: null },
    title: <span className="!text-primary">{isSiasky ? siaskyMessage : message}</span>,
  };
}
