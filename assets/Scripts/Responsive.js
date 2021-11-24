
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    update() {
        this.Responsive();
    },
    Responsive() {
        // console.log(cc.view.getDesignResolutionSize());
        // console.log(cc.view.getCanvasSize());
        let skill = this.node;
        let device = cc.view.getFrameSize();
        // console.log(device);
        let landscape = device.width >= device.height

        if (landscape) {
            skill.x = 0;
            skill.y = 0;
            skill.scale = 1;

        } else {
            skill.x = 640 - device.width / 2;
            skill.scale = 0.7
        }
    }

    // update (dt) {},
});
