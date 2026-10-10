# Patch Exercise Notes

## Issues identified and fixes

1. SQL filtering: Grouped title and description matching with parentheses so archived tasks are excluded and the status filter applies consistently.
2. Pagination: Reset the current page when the search query or status filter changes.
3. Request handling: Added loading and error-state cleanup and prevented outdated requests from updating component state after cleanup.
4. Artificial delay: Removed the intentional sleep from the task search endpoint.

## Verification

- Frontend production build: passed.
- Maven command: completed successfully; no automated tests were present.
- Manual checks: record the scenarios tested and their actual results before submission.

## Trade-offs

Kept the existing application architecture and did not add unrelated functionality.

## AI assistance

ChatGPT assisted with code review and debugging. The changes were reviewed locally.
