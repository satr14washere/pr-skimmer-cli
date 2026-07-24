import * as t from "@opentui/core";

const motd = [
  '"please provide a website preview"',
  'do you lack reading comprehension?',
  'don\'t forget the pr checklist!',
  'please don\'t use ai...',
  'read the f-ing docs',
  'looks good to me!',
];

export const tittle = t.Box(
  { justifyContent: "center", alignItems: "flex-end" },
  t.ASCIIFont({ font: "tiny", text: "PR-Skimmer" }),
  t.Text({ content: motd[Math.floor(Math.random() * motd.length)], attributes: t.TextAttributes.DIM }),
);