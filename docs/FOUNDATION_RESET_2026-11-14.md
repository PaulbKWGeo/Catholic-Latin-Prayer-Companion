# Catholic Latin Prayer Companion — Foundation Reset

Date: 2026-11-14

## Authoritative starting point
- Source snapshot branch: `baseline/pre-refactor-2026-11-14`
- Snapshot commit: `5e27b865fa30dc98a93762cb1493f7a1d46e6e0f`
- Live home HTML blob: `bb1939d39ccc0451ad6a2a1b32f3d95968a1ccb2`
- Reader V5 blob: `bbceedf0d78cfbf0979e0c402ce95f40e191769a`
- Integration preview blob: `65c6b161eebb6daac7d02e7aebdb03d0ebb97d00`

The user approves the *existing application as the historical source and design reference*, while explicitly requesting correction of defects, CSS conflicts and text collisions. Do not interpret this as approval to merge PR #33 or preserve broken spacing.

## Initial measured audit (main/index.html)
- 48,342 source characters
- 26,607 CSS characters in one inline style block
- 242 `!important` occurrences
- 114 CSS rule blocks whose selectors mention `hero`
- Repeated `.hero-title` selector in 15 rule blocks; `.hero` in 10; `.hero-brand` in 9; `.hero-bar` in 7
- One inline script block; full JS behavior still needs detailed audit
- The screenshot job captures images but does not automatically assert absence of collisions

## Cleanup protocol
1. Preserve snapshot branch unchanged. Never develop on it.
2. Work only on `refactor/clean-foundation-v1`; do not modify `main`.
3. Inventory CSS cascade and viewport-specific rules, HTML structure and JS dependencies.
4. Replace conflicting header layout with one coherent flow-based structure; avoid arbitrary absolute offsets.
5. Consolidate duplicate CSS in stages; delete superseded rules rather than layering more overrides.
6. Preserve 12 prayers, saved progress, favorites, pronunciation, practice, navigation and existing design identity.
7. Add automated mobile geometry checks for overlaps and content clipping at multiple viewports, plus screenshot evidence.
8. Validate on real Safari/iPhone before claiming device-level acceptance.
9. Only after tests and explicit visual acceptance, create a clean foundation release and request merge approval.
10. PR #30, #31 and #33 are not approved to merge.

## Gate status
Snapshot: COMPLETE.
Audit: STARTED, not comprehensive.
Refactor: NOT STARTED.
Automated layout assertions: NOT YET IMPLEMENTED.
Visual acceptance: PENDING.
Production deployment: NO CHANGE.
