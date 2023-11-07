import { GamePage } from "../types/GamePage";

declare global {
    let unsafeWindow: Window | undefined;
    interface Window {
        dojo: {
            clone: <T>(subject: T) => T;
            subscribe: (event: string, handler: (...args: any[]) => void) => void;
        };
        gamePage: GamePage;
        $: JQuery;
    }
}

export class GameIntegration {
    constructor() {
        console.log('GameIntegration constructor');
    }

    static async waitForGame(timeout = 30000): Promise<GamePage> {

        if (timeout < 0) {
            throw new Error("Game did not load in time");
        }

        if ($("#loadingContainer").is(":hidden") && $("#game").is(":visible")) {
            console.log("Game is loaded, init Kittens Automation");
            if (window.gamePage !== null && window.gamePage !== undefined) {
                return window.gamePage;
            }
        }

        return new Promise<GamePage>((resolve, reject) => {
            setTimeout(() => {
                this.waitForGame(timeout - 1000).then(resolve).catch(reject);
            }, 1000);
        });

    }

}

