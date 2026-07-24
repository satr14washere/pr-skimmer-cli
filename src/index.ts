import { createOAuthDeviceAuth } from "@octokit/auth-oauth-device";
import * as t from "@opentui/core";
import { tittle } from "./components";

const renderer = await t.createCliRenderer({
  exitOnCtrlC: true,
  consoleOptions: {
    position: t.ConsolePosition.BOTTOM,
    sizePercent: 30,
  },
});

const container = t.Box(
  { alignItems: "center", justifyContent: "center", padding: 1, flexGrow: 1 },
  tittle,
);
renderer.root.add(container);

const keyHandler = renderer.keyInput

keyHandler.on("keypress", (key) => {
  console.log(`Key pressed: ${key.name}`);
  switch (key.name) { 
    case "=":
      renderer.console.toggle();
      break;
  } 
}); 
