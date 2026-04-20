# Changelog

Notable changes to the `www.dipnot.app` landing site.

Format: reverse chronological, one heading per date (`## YYYY-MM-DD`),
one bullet per change with a PR link when available. Keep entries
terse — the commit message and PR body carry the full reasoning.

## 2026-04-21

- **Typography** — Added `.text-caption` (12 px), `.text-small` (14 px),
  and `.text-lead` (18 px) helper classes in [`css/styles.css`](css/styles.css)
  for the canonical type-scale tokens Bulma doesn't cover (Bulma jumps
  16 → 20 with no 18 step). Completes the Inter adoption ask from
  `core_docs/communication/to-landing.md` (2026-04-19). Spec:
  [`core_docs/product-design/typography.md`](../core_docs/product-design/typography.md).
  Closes [#52](https://github.com/Dipnot-App/www.dipnot.app/issues/52).

## 2026-04-19

- **Typography** — Loaded **Inter** via Google Fonts CDN in
  [`_includes/layouts/base.njk`](_includes/layouts/base.njk) (with
  preconnect hints) and overrode Bulma's default font stack in
  [`css/styles.css`](css/styles.css) so body, headings, `.title`, and
  `.subtitle` all pick up Inter. Cross-surface font ratified in
  [`core_docs/product-design/typography.md`](../core_docs/product-design/typography.md)
  (landed via core_docs PR #67 / issue #18). Landed via
  [PR #50](https://github.com/Dipnot-App/www.dipnot.app/pull/50).
