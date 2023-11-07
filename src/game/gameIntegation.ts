import { sleep } from "../tools/sleep";
import { GamePage } from '../types/GamePage';
import { CommonUI } from '../ui/commonUI';

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
    game: GamePage;
    private _lastMessage: string = "";
    private _lastMessageRepeat: number = 0;
    private _lastMessageElt: { span: HTMLElement } = { span: document.createElement("span") };
    private commonUI: CommonUI;

    constructor(game: GamePage) {
        console.log('GameIntegration constructor');
        this.game = game;

        this.commonUI = new CommonUI(this);
        this.init();
        this.start();
    }

    init() { 
        this.commonUI.setDefaultTheme();
    }

    start() {
        
    }

    static async waitForGame(timeout = 30000): Promise<GameIntegration> {
        if (timeout < 0) {
            throw new Error("Game did not load in time");
        }

        if ($("#loadingContainer").is(":hidden") && $("#game").is(":visible")) {
            var msg = "Game is loaded, init Kittens Automation";
            console.log(msg);
            if (window.gamePage !== null && window.gamePage !== undefined) {
                var game = new GameIntegration(window.gamePage);
                game.printMessage(msg);
                return game;
            }
        }

        return new Promise<GameIntegration>((resolve, reject) => {
            sleep(1000).then(() =>
                this.waitForGame(timeout - 1000).then(resolve).catch(reject));
        });
    }

    printMessage(message: string) {
        if (this._lastMessage !== message) {
            this._lastMessageRepeat = 0;

            var item = this.game.msg(message, "", "", true);
            $(item.span).css("color", "#009933");

            this._lastMessageElt = item;
            this._lastMessage = message;
        } else {
            $(this._lastMessageElt.span).text(`${this._lastMessage} (x${this._lastMessageRepeat})`);
            this._lastMessageRepeat++;
        }
    }

}

