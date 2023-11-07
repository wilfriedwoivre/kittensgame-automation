import { GameIntegration } from "./game/gameIntegation";

(async () => {
    const kittenGame = await GameIntegration.waitForGame();
    
})().catch((...args: Array<unknown>) => console.error("👩‍🔬", ...args));