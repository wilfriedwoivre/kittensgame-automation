import { GameIntegration } from "../game/gameIntegation";
import { GamePage } from "../types/GamePage";

export class CommonUI {
    instance: GameIntegration;
    game: GamePage;

    constructor(instance: GameIntegration) {
        this.instance = instance;
        this.game = instance.game;
    }

    setDefaultTheme(theme = "sleek") {
        if (this.game.colorScheme !== theme) {
            this.instance.printMessage(`Set Theme to ${theme}`);
            this.game.toggleScheme(theme);
        }
    }

}