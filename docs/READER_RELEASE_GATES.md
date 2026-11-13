# Prayer Companion — protected baseline and release gates

Date: 2026-11-13

## Protected source baseline
- Repository: PaulbKWGeo/Catholic-Latin-Prayer-Companion
- Home-screen source: main/index.html
- Git blob SHA: `bb1939d39ccc0451ad6a2a1b32f3d95968a1ccb2`
- Reader V5 reference: main/reader-preview.html
- Existing integration: PR #31, not approved to merge
- Earlier reader: PR #30, superseded, not approved to merge

This is a **source checkpoint**, not a declaration of visual approval. The latest iPhone screenshot shows the home wordmark out of alignment. Do not claim that the current live page is visually approved.

## Required gates
1. Never change main/index.html or merge a PR without explicit user approval.
2. All new work goes to a separate branch; previews must be explicitly labeled as unverified.
3. Before integrating the reader, record an approved iPhone home-screen screenshot and its corresponding commit SHA.
4. Verify home-screen header, wordmark, prayer cards and footer against the screenshot. Visual approval cannot be replaced by a code check.
5. Reader CSS must be scoped under a reader-only container; no unscoped overrides to .hero, .hero-brand, nav, footer, or body.
6. Check all 12 prayers and every navigation path; confirm bookmarks, learned state, practice and pronunciation behavior.
7. Run source-integrity checks and actual mobile rendering checks before requesting review.
8. If any gate fails, do not merge; document the failure and repair on a branch.
9. Do not merge outdated PR #30 or PR #31 as-is.
10. Keep UI polish deferred until functionality and release gates pass.

## Why this exists
The home CSS contains multiple competing branding overrides with !important, absolute offsets and transforms. Previous integration testing checked for the presence of code but not the rendered appearance. The integration preview also duplicated index.html and could therefore carry an already-broken baseline forward.

## Current release status
**BLOCKED:** visual home baseline has not been matched to an approved screenshot. No claim of end-to-end functionality or visual verification has been made.
