window.endGame = false;
window.tutorial = true;
let check = true;
cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function () {
        const canvas = this.node.getComponent(cc.Canvas);
        window.height = canvas.designResolution.height;
        window.width = canvas.designResolution.width;
        window.MouseX = width / 2;
        window.MouseY = 150;
    },
    start() {
        this.node.on("touchstart", function (obj) {
            //relate to store
            if (window.endGame) {
                this.releaseStore()
            }
        }, this);
    },
    releaseStore() {
        console.log('GOTOSTORE');
    },
    control() {
        if (!window.endGame) {
            this.node.on("touchmove", function (obj) {
                MouseX = obj.getLocation().x
                MouseY = obj.getLocation().y;
                window.tutorial = false;
            }, this);
        }
    },
    update() {
        this.control();
    }
});
