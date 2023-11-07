import { Manager } from "./Manager";

export class BonfireManager extends Manager {

    run(): void {
        this.autoGathering();

        this.buyBuilding("Catnip Field");
    }

    autoGathering() {
        var catnip = this.game.resPool.get("catnip");

        if (catnip.value / catnip.maxValue < 0.95) {
            var btn = this.getButton(this.game.bldTab.children, "Gather catnip");
            this.buyItem(btn);
        }
    }

    buyBuilding(name: string) {
        var btn = this.getButton(this.game.bldTab.children, name);
        this.buyItem(btn);
    }
}