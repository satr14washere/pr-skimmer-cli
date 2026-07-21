import * as t from "@opentui/core";

export const tittle = t.Box(
  { justifyContent: "center", alignItems: "flex-end" },
  t.ASCIIFont({ font: "tiny", text: "PR-Skimmer" }),
  t.Text({ content: '"LGTM!"', attributes: t.TextAttributes.DIM }),
);