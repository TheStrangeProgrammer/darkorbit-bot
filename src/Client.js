
class Client {
    constructor() {
        this.mainBrowser = new Browser("Main Browser", new Size(1680,1050));
        this.gameBrowser = new Browser("Game Browser", new Size(1680,1050));
    }

    applyBoxResource(){
        this.gameBrowser.replaceResource("box2.swf", LOOT_SWF_URL);
        this.gameBrowser.replaceResource("orangePumpkin.swf", LOOT_SWF_URL);
        this.gameBrowser.replaceResource("winterGiftBox.swf", LOOT_SWF_URL);
        this.gameBrowser.replaceResource("icyBox.swf", LOOT_SWF_URL);
        this.gameBrowser.replaceResource("prometheusBox.swf", LOOT_SWF_URL);
    }
    applyHunterResource(){
        this.gameBrowser.blockResource("spacemap/3d/textures/");
        this.gameBrowser.blockResource("spacemap/3d/meshes/");

        var replacement_ships_url = "https://pbdo-bot.net/magic/XD/" + Config.getValue("hunter_targets") + ".swf"
        this.gameBrowser.replaceResource("https://pinkgalaxy.net/spacemap/graphics/assets/replacementShips.swf", replacement_ships_url);
        this.gameBrowser.replaceResource("https://pinkgalaxy.net/spacemap/graphics/ui/ui.swf", "https://pbdo-bot.net/magic/XD/ui.swf");
    }
}