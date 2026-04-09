// Long-form body for each canon entry. Markdown, rendered by the canon page.
// Keeping it in one place so editors don't need to touch routing code.

export const canonContent: Record<string, string> = {
  "liability-sponge": `
When you place a human "in the loop" of a high-velocity algorithmic process, you are not giving them control. You are giving them **liability**.

The sponge takes many shapes: the junior reviewer clicking approve on 400 cases a day; the resettlement officer countersigning outputs they have no capacity to audit; the content moderator whose override rate is a KPI. In every case, the architecture of the system manufactures a scapegoat whose job is to absorb blame when the system fails.

**The diagnostic question:** *If this system harms someone, whose name ends up in the post-mortem?* If the answer is a human sitting on the end of an algorithmic firehose, you are looking at a Liability Sponge, not a human in the loop.
`,
  "accuracy-theater": `
A system advertised as "94% accurate" does not fail randomly across the population. The failing 6% is almost always concentrated — on the most vulnerable, the hardest cases, the people who already cannot make the system hear them.

**Accuracy theater** is the rhetorical move that averages these failures away. The **Accountability Gap** is what you get when the theater persuades an auditor: nobody can be held responsible for a statistical outcome, so nobody is.

The counter-move is distributional auditing — *which* 6% is failing, *where*, and *to whom*.
`,
  "watchdog-paradox": `
A **sensor** transmits. A **sentinel** halts.

Most "AI watchdog" mechanisms are sensors — they log, they alert, they generate reports. What they cannot do is stop the system. Without halt authority, oversight becomes a downstream theatre performed on frozen evidence.

The Grievance Watchdog Architecture resolves the paradox by giving the sentinel **negative power only**: the capacity to block continuation under narrowly-scoped triggers, with mandatory human re-entry and attributable overrides. It cannot act; it can only refuse.
`,
  "clarke-constraint": `
> Any sufficiently advanced technology is indistinguishable from magic.

The corollary, which is what actually matters for governance:

> Any sufficiently opaque system will be treated as **law**.

Opacity is not a property, it is an authority. Once a system's reasoning has passed the threshold of incomprehension, its outputs stop being claims and start being facts. You cannot negotiate with a fact. You can only comply.

The Clarke Constraint is the warning: every percent of opacity you ship is a percent of authority you have transferred out of the institution and into the apparatus.
`,
  "calvin-convention": `
Susan Calvin didn't design ethical robots. She designed **contracts robots couldn't wriggle out of**.

The Calvin Convention is six contractual mechanisms that encode pre-action constraints and human control as architecture — not policy, not culture, not training:

1. **Right of Override** — attributable, logged, narrowly scoped.
2. **Right of Refusal** — the system can refuse unsafe continuation without penalty.
3. **Pre-action Constraints** — hard boundaries the system cannot optimize around.
4. **Edge-case Registry** — named failure modes with mandatory human re-entry.
5. **Attribution Chain** — every output carries the provenance of the decision path.
6. **Audit Trail as Battlefield** — the log is a legal instrument, not a log file.

These are not policies. They are clauses. They live in procurement contracts, not in culture decks.
`,
};
