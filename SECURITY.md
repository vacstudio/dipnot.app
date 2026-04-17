# Security Policy

## Reporting a vulnerability

If you believe you've found a security issue in the Dipnot landing
page (`dipnot.app`) or this repository, please **do not** open a
public GitHub issue or pull request. Instead:

- **Preferred**: GitHub's **Private vulnerability reporting** — go
  to the **Security** tab on this repo → **Advisories** →
  **Report a vulnerability**.
- **Alternative**: Email **help@dipnot.app** with the subject
  line `SECURITY — www_dipnot_app`.

Please include:

- A description of the issue.
- Steps to reproduce.
- Impact and severity from your perspective.
- Any suggested mitigation, if you have one.

## Scope

This repository serves the static marketing site at
`https://dipnot.app`. **In scope** for this repo:

- Cross-site scripting (XSS), open redirect, or other injection
  vectors in the published HTML / CSS / JS.
- Subresource Integrity (SRI), Content Security Policy, or
  `Referrer-Policy` / `Permissions-Policy` misconfigurations.
- Secrets leaked in git history or in the published build artifacts.
- Misconfigured GitHub Actions permissions or deploy pipeline.

**Out of scope** for this repo (report elsewhere):

- Issues in the Dipnot mobile app, admin panel, or Firebase
  backend. Contact `help@dipnot.app` and we'll route to the right
  team.
- Automated scan reports without a proof-of-concept.
- Best-practice recommendations without a concrete vulnerability.

## Response expectations

- We aim to acknowledge reports within **72 hours**.
- After initial triage, we'll share a rough timeline for the fix.
- Fixes ship through a normal pull request and auto-deploy to
  `main`; we'll coordinate disclosure with you before any public
  write-up.

## Safe harbour

We support good-faith security research. If you follow this policy,
we won't pursue legal action or restrict your access. Please avoid:

- Accessing or modifying data that isn't your own.
- Disrupting service for other users.
- Publicly disclosing the issue before we've had a reasonable
  window to ship a fix.

Thank you for helping keep Dipnot safe.
