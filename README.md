# gitmind-demo

Small, dependency-free campus-store utilities used to demonstrate **Git-Mind**,
an AI system that turns failing tests into *verified* pull requests (a human always merges).

```
npm test        # node --test, Node 20+
```

| Module | What it does |
|---|---|
| `src/cart.js` | cart total, percentage discount |
| `src/grades.js` | average score, letter grade |
| `src/text.js` | slugify, truncate |
| `src/attendance.js` | attendance %, exam eligibility (75% rule) |
| `src/ids.js` | sequential order ids with reset |

## Enable CI (optional, for automatic fixes)

GitHub → this repo → **Add file → Create new file** → name it `.github/workflows/ci.yml`,
paste the contents of [`docs/ci-workflow.yml`](docs/ci-workflow.yml), commit to `main`. Then merge `main` into each
`demo/*` branch (or recreate them) so pull requests from those branches run CI.

## Demo branches

`main` is green. Each `demo/*` branch contains **one realistic bug** that breaks its tests:

| Branch | Bug | Failing test |
|---|---|---|
| `demo/off-by-one` | cart loop reads past the end of the array | `test/cart.test.js` |
| `demo/wrong-discount` | discount is added instead of subtracted | `test/cart.test.js` |
| `demo/grade-boundary` | `>` instead of `>=`, so a 90 gets a B | `test/grades.test.js` |
| `demo/slugify-case` | slugs keep uppercase letters | `test/text.test.js` |
| `demo/attendance-75` | exactly 75% is wrongly ineligible | `test/attendance.test.js` |
| `demo/missing-reset` | order ids cannot be reset between days | `test/ids.test.js` |

### Running a demo in Git-Mind

1. Repositories -> connect `gitmind-demo`.
2. AI Fixes -> pick a `demo/*` branch -> **Run AI fix**.
3. Git-Mind clones the branch, runs `node --test`, asks the model for a patch, re-runs the tests,
   and opens a PR **into that branch** only if every test passes.
4. Review the PR on GitHub and merge it yourself.

To reset a branch after merging the fix: `git push -f origin <original-sha>:demo/<name>` (shas in `DEMO_RESET.md`).
