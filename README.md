[![Release](https://github.com/SkynetLabs/webportal-website-skynetlabs/actions/workflows/ci_release.yml/badge.svg)](https://github.com/SkynetLabs/webportal-website-skynetlabs/actions/workflows/ci_release.yml)

# Webportal Website SkynetLabs

This repo contains the code for the customized websites for the webportals hosted by Skynet Labs.

## Development

Since a repo cannot be forked within an organization, developers should set a second origin to the original website repo in order to pull in any updates. 

```
git remote add webportal-website git@github.com:SkynetLabs/webportal-website.git
```

You can check that your local environment is set up properly like so:

```
$ git remote -vv 
origin  git@github.com:SkynetLabs/webportal-website-skynetlabs.git (fetch)
origin  git@github.com:SkynetLabs/webportal-website-skynetlabs.git (push)
weportal-website        git@github.com:SkynetLabs/webportal-website.git (fetch)
weportal-website        git@github.com:SkynetLabs/webportal-website.git (push)
```