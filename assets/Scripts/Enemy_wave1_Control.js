let groupEnemy;
let wave1 = true;
let count = 0;
let numberEnemies = 10;
let delayShooting = 20;
let timeShootingCount = 0;

cc.Class({
    extends: cc.Component,

    properties: {
        enemy_prefab: cc.Prefab
    },
    // onload(){
    //     this.node.enemy1 = this;
    // },
    start() {
        groupEnemy = this.node;
    },

    create_Enemy() {

        if (wave1 && !window.tutorial) {
            if (timeShootingCount < delayShooting) {
                timeShootingCount += 1;
            } else {
                let enemy = cc.instantiate(this.enemy_prefab);
                groupEnemy.addChild(enemy);
                timeShootingCount = 0;
                count += 1;
            }
            if (count == numberEnemies) {
                wave1 = false;
                window.wave2 = true;
            }
        } else {
            groupEnemy.children.map((enemy, index) => {
                if (enemy.y < -70) {
                    enemy.destroy();
                    // countDestroyed++;
                }
            });
            // if (countDestroyed == 20) {
            //     window.wave2 = true;
            //     countDestroyed = 0;
            // }
        }

    },
    update() {
        this.create_Enemy()
    }

});