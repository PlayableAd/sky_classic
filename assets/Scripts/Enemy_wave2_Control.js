let groupEnemy;
let count = 0;
window.countDestroyed = 0;
let numberEnemies = 10;
let delayShooting = 20;
let timeShootingCount = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        enemy_prefab: cc.Prefab
    },

    start() {
        groupEnemy = this.node;
    },
    onBeginContact: function (contact, selfCollider, otherCollider) {
        console.log('collider');
        this.node.destroy()
    },
    create_Enemy() {
        if (window.wave2) {
            if (timeShootingCount < delayShooting) {
                timeShootingCount += 1;
            } else {
                let enemy = cc.instantiate(this.enemy_prefab);
                groupEnemy.addChild(enemy);
                timeShootingCount = 0;
                count++;
            }
            if (count == numberEnemies) {
                // window.boss = true;
                window.wave2 = false;
            }
        } else {
            groupEnemy.children.map((enemy, index) => {
                // console.log(enemy.y);
                if (enemy.y < -20) {
                    // console.log('destroyed');
                    enemy.destroy();
                    window.countDestroyed++;
                }
            })
            if (window.countDestroyed == numberEnemies) {
                window.wave2 = false;
                // window.countDestroyed = 0;

            }
        }
    },

    update() {
        this.create_Enemy()
    }

});
