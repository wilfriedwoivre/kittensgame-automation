import { Button } from "../../types/Button";
import { GamePage } from "../../types/GamePage";
import { GameIntegration } from "../gameIntegation";

export abstract class Manager {
    instance: GameIntegration;
    game: GamePage;

    constructor(instance: GameIntegration) {
        this.instance = instance;
        this.game = instance.game;    
    }

    getButton(buttons: Button[], name: string): Button {
        var btn = buttons.find((btn: Button) => btn.model.name === name);
        if (!btn) {
            throw new Error(`Button ${name} not found`);
        }
        return btn;
    }

    abstract run(): void;

    buyItem(btn: Button) {
        this.instance.printMessage(`Click on ${btn.model.name}`);
    }
}