let isShoot = false;
let bulletGroup;
let delayShooting = 6;
let timeShootingCount = 0;
let check = true;

cc.Class({
    extends: cc.Component,

    properties: {
        Bullet_Prefab: cc.Prefab,
        shoot_Audio: cc.AudioClip,
        background_Audio: cc.AudioClip,
        tutorial_text: cc.Node,
        tutorial_hand: cc.Node
    },

    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
    },


    start() {
        bulletGroup = this.node.parent.children[2];
        cc.tween(this.node).to(1,
            {
                position:
                {
                    value: cc.v2(window.MouseX, window.MouseY),
                    easing: 'sineInOut'
                }
            }).start();

        this.node.on('touchstart', function (event) {
            this.node.x = event.getLocation().x
            this.node.y = event.getLocation().y;
            isShoot = true;
            if (check) {
                //relate to store
                cc.audioEngine.playEffect(this.background_Audio, true, 0.1);
                this.tutorial_text.active = false;
                this.tutorial_hand.active = false;
                check = false;
            }
        }, this);
        this.node.on('touchmove', function (event) {
            this.node.x = event.getLocation().x
            this.node.y = event.getLocation().y;
            isShoot = true;
        }, this);

        this.node.on('touchend', function (event) {
            isShoot = false;
        }, this);
        this.node.on('touchcancel', function (event) {
            isShoot = false;
        }, this);

    },

    update(dt) {
        if (window.endGame) {
            this.node.x = 640;
            this.node.y = 100;
        }

        if (isShoot && !window.endGame) {
            if (timeShootingCount < delayShooting) {
                timeShootingCount += 1;
            } else {
                this.shoot_enemy();
                timeShootingCount = 0;
            }
        }

        for (let i = 0; i < bulletGroup.length; i++) {
            let bullet = bulletGroup[i];
            if (bullet.y > 720) {
                bullet.destroy();
            }
        }
    },

    shoot_enemy() {
        let bullet = cc.instantiate(this.Bullet_Prefab);
        bulletGroup.addChild(bullet);
        bullet.setPosition(this.node.getPosition().x, this.node.getPosition().y + 100);
        cc.tween(bullet)
            .to(1, { position: cc.v2(this.node.getPosition().x, 800) })
            .start()
        cc.audioEngine.playEffect(this.shoot_Audio, false, 0.1);
    }

});
