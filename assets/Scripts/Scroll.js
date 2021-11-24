cc.Class({
    extends: cc.Component,

    properties: {

        Far_bg: [cc.Node], // ​​used to manage the array of background image nodes, remember to return to the cocos panel to add the number of nodes in the array

        Bg_speed: 1, // variable that controls speed when moving

    },
    update(dt) {

        this.bgMove(this.Far_bg, this.Bg_speed);

    },

    bgMove(bgList, speed) {

        // Cycle through two pictures each time

        for (var index = 0; index < 2; index++) {

            bgList[index].y -= speed;

        }

        //y coordinate minus its own height to get the y value when this background just leaves the scene completely

        if (bgList[0].y <= -1029) {

            bgList[0].y = 1650; //Re-assign the y of this background image after leaving the scene, above the scene

        }

        if (bgList[1].y <= -1029) {

            bgList[1].y = 1650; //Re-assign the y of this background image after leaving the scene, above the scene

        }

    },

});