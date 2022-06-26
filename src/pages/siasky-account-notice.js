import * as React from "react";
import isDomain from "../services/isDomain";
import { Section, SectionTitle, SectionTitleCaption } from "../components/Layout";
import Seo from "../components/seo";
import emails from "../services/emails";

const AccountPage = ({ navigate }) => {
  // prevent domains other than siasky.net from accessing this page
  React.useEffect(() => {
    if (!isDomain("siasky.net")) navigate("/");
  }, [navigate]);

  return (
    <>
      <Seo title="Customer Accounts Moved Permanently" />

      <Section className="bg-white">
        <div className="text-left">
          <SectionTitleCaption>Siasky.net Customer Notice</SectionTitleCaption>
          <SectionTitle>Customer Accounts Moved Permanently</SectionTitle>

          <p className="mt-6 text-palette-500">
            Due to rapid growth and increased abuse, the{" "}
            <a href="https://siasky.net" className="text-primary">
              siasky.net
            </a>{" "}
            portal no longer hosts user accounts.
          </p>

          <p className="mt-10 space-y-2">
            <h3 className="text-2xl font-bold">New to Skynet?</h3>
            <p>
              Get started with a free account at{" "}
              <a href="https://skynetfree.net" className="text-primary">
                skynetfree.net
              </a>
              .
            </p>
          </p>

          <p className="mt-6 space-y-2">
            <h3 className="text-2xl font-bold">Are you a paying customer?</h3>
            <p>
              Access your existing account by visiting{" "}
              <a href="https://skynetpro.net" className="text-primary">
                skynetpro.net
              </a>
              .
            </p>
          </p>

          <p className="mt-6 space-y-2">
            <h3 className="text-2xl font-bold">Have a registered account but still on a free plan?</h3>
            <p>
              Go to{" "}
              <a href="https://skynetfree.net" className="text-primary">
                skynetfree.net
              </a>{" "}
              to log in.
            </p>
          </p>

          <p className="mt-10 text-palette-400">
            Read our blog post on{" "}
            <a
              href="https://skynetlabs.com/news/evolving-skynet-portals-to-better-survive-on-the-centralized-web"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              evolving Skynet portals
            </a>
            .
          </p>

          <p className="mt-2 text-palette-400">
            For more info on signing up and choosing an account tier, visit{" "}
            <a
              href="https://support.skynetlabs.com/portal-accounts/sign-up-and-pick-a-tier"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              our support site
            </a>
            .
          </p>

          <p className="mt-10 text-palette-300">
            Please reach out to{" "}
            <a href={`mailto:${emails.contact}`} className="text-primary">
              {emails.contact}
            </a>{" "}
            for further support.
          </p>
        </div>
      </Section>
    </>
  );
};

export default AccountPage;
