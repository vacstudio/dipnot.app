# Changelog

Notable changes to the `www.dipnot.app` landing site.

Format: reverse chronological, one heading per date (`## YYYY-MM-DD`),
one bullet per change with a PR link when available. Keep entries
terse — the commit message and PR body carry the full reasoning.

## 2026-04-24

- **Issue infra** — Provisioned the status axis (`status:triage`,
  `status:blocked`, `status:wontfix`, `status:good-first-issue`) by
  renaming the bare `blocked` label to `status:blocked` and adding
  the missing three. Deleted GitHub's 9 default labels (`bug`,
  `enhancement`, `documentation`, `duplicate`, `good first issue`,
  `help wanted`, `invalid`, `question`, `wontfix`) per the
  Replacement policy. Added [`.github/ISSUE_TEMPLATE/bug_report.md`](.github/ISSUE_TEMPLATE/bug_report.md)
  and [`.github/ISSUE_TEMPLATE/feature_request.md`](.github/ISSUE_TEMPLATE/feature_request.md)
  with `status:triage` front-matter so new issues auto-tag for triage.
  Landing's diverged `type:` / `priority:` / `area:` taxonomy
  (finer-grained than the `core_docs` canonical — `p0..p3` vs.
  `high/medium/low`, and landing-specific areas `a11y`, `seo`,
  `privacy`, `ci`, `brand`) is preserved as intentional drift;
  variance to be formalized in `core_docs/development-rules/issues.md`
  (ask queued).

## 2026-04-21

- **CI** — Removed `continue-on-error: true` from the `Validate HTML`
  step in [`.github/workflows/ci.yml`](.github/workflows/ci.yml) — now
  a hard gate. Enabled by [PR #60](https://github.com/Dipnot-App/www.dipnot.app/pull/60)
  clearing all 30 pre-existing errors. Pa11y + Lighthouse remain soft
  until their own backlogs are cleared (tracked under epic
  [#32](https://github.com/Dipnot-App/www.dipnot.app/issues/32)).
- **Brand assets** — Audited every brand-logo reference against the
  [asset-naming rule](../core_docs/product-design/logo.md#naming-rule)
  ratified in `core_docs` on 2026-04-20. Result: **0 renames needed.**
  [`img/logos/`](img/logos/) already carries all 9 master filenames
  (6 solo + 3 composed) as both SVG and PNG exports, matching
  [`core_docs/assets/logo/`](../core_docs/assets/logo/). All
  references in code ([`_includes/partials/nav.njk`](_includes/partials/nav.njk),
  [`_includes/partials/footer.njk`](_includes/partials/footer.njk),
  [`brand-book.html`](brand-book.html)) already use the master names
  (`logo.svg`, `logo-gold.svg`, `logo-white-on-teal.svg`,
  `logo-white-on-sky-captain.svg`). Favicon set at repo root
  (`favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`,
  `apple-touch-icon.png`, `android-chrome-192x192.png`,
  `android-chrome-512x512.png`) keeps its platform-standard filenames
  per the rule's exception clause.
- **Privacy policy** — Mirrored the Expo (Push + OTA Updates) and
  Google Analytics US-servers additions from
  [`core_docs/data-processors.md`](../core_docs/data-processors.md)
  into [`gizlilik-politikasi.html`](gizlilik-politikasi.html) (TR,
  authoritative) and [`privacy-policy.html`](privacy-policy.html) (EN
  mirror). Expo entry now covers OTA launch-time pings to
  `u.expo.dev` (app install ID, runtime version, update channel)
  alongside push tokens + stability metadata. GA entry gained a
  closing sentence disclosing USA processing (no user-configurable
  region on standard Firebase projects). Bumped `Son Güncelleme` /
  `Last updated` to 2026-04-21. Contributes to epic
  [#30](https://github.com/Dipnot-App/www.dipnot.app/issues/30).
- **HTML quality** — Cleared every error surfaced by
  `npm run check:html` (30 → 0). Root causes: Nunjucks `{% if %}`
  conditional meta tags leaving trailing whitespace when a frontmatter
  key was unset (base.njk); Bulma's legacy `<a role="button"
  class="navbar-burger">` (nav.njk → swapped to `<button>`);
  `<th>` cells missing `scope` attributes in the KVKK personal-data
  processor tables (gizlilik-politikasi.html + privacy-policy.html).
  Contributes to epic [#32](https://github.com/Dipnot-App/www.dipnot.app/issues/32).
  Landed via [PR #60](https://github.com/Dipnot-App/www.dipnot.app/pull/60).
- **Typography** — Added `.text-caption` (12 px), `.text-small` (14 px),
  and `.text-lead` (18 px) helper classes in [`css/styles.css`](css/styles.css)
  for the canonical type-scale tokens Bulma doesn't cover (Bulma jumps
  16 → 20 with no 18 step). Completes the Inter adoption ask from
  `core_docs/communication/to-landing.md` (2026-04-19). Spec:
  [`core_docs/product-design/typography.md`](../core_docs/product-design/typography.md).
  Closes [#52](https://github.com/Dipnot-App/www.dipnot.app/issues/52).
  Landed via [PR #58](https://github.com/Dipnot-App/www.dipnot.app/pull/58).
- **Repo hygiene** — Added `.DS_Store` + `**/.DS_Store` to
  [`.gitignore`](.gitignore). Landed via
  [PR #57](https://github.com/Dipnot-App/www.dipnot.app/pull/57).

## 2026-04-19

- **Typography** — Loaded **Inter** via Google Fonts CDN in
  [`_includes/layouts/base.njk`](_includes/layouts/base.njk) (with
  preconnect hints) and overrode Bulma's default font stack in
  [`css/styles.css`](css/styles.css) so body, headings, `.title`, and
  `.subtitle` all pick up Inter. Cross-surface font ratified in
  [`core_docs/product-design/typography.md`](../core_docs/product-design/typography.md)
  (landed via core_docs PR #67 / issue #18). Landed via
  [PR #50](https://github.com/Dipnot-App/www.dipnot.app/pull/50).
