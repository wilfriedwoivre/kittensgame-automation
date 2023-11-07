import { GameIntegration } from "./game/gameIntegation";
import { sleep } from "./tools/sleep";

(async () => {
    sleep(1000).then(async () => {
        const kittenGame = await GameIntegration.waitForGame();
    });
})().catch((...args: Array<unknown>) => console.error("👩‍🔬", ...args));