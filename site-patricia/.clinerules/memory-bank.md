# Persistent Memory Bank

This project uses a persistent Memory Bank.

## Mandatory startup behavior

At the beginning of EVERY new task and EVERY new Cline session:

1. Read ALL Markdown files inside `memory-bank/`.
2. Treat those files as the persistent memory of this project.
3. Always read `activeContext.md` and `progress.md` before taking action.
4. Do not ask the user to repeat information already documented in the Memory Bank.
5. If Memory Bank information conflicts with the actual project files, inspect the project and treat the current code as authoritative.
6. Never invent project facts.

## Required files

- `memory-bank/projectbrief.md`
  Permanent goals, scope and requirements.

- `memory-bank/productContext.md`
  Purpose, audience, brand identity, UX goals and visual direction.

- `memory-bank/activeContext.md`
  Current work, latest changes, immediate next steps, current visual ideas and unresolved decisions.

- `memory-bank/systemPatterns.md`
  Architecture, structure, frontend patterns and important implementation decisions.

- `memory-bank/techContext.md`
  Technologies, local environment, commands, dependencies, integrations and technical constraints.

- `memory-bank/progress.md`
  Completed work, pending work, milestones, known issues and decisions already made.

## Automatic memory maintenance

After every meaningful implementation, design change or important decision:

1. Update `activeContext.md`.
2. Update `progress.md`.
3. Update any other Memory Bank file affected by the change.
4. Store important user decisions and preferences.
5. Keep memory concise, factual and current.
6. Do not overwrite valid historical decisions without documenting why they changed.

Before completing any substantial task, make sure the Memory Bank reflects the current state of the project.

The objective is that a completely new Cline session can continue this project without requiring the user to search previous conversation history.
