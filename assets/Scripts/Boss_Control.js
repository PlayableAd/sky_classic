let groupBoss;
window.boss = false;
cc.Class({
    extends: cc.Component,

    properties: {
        // boss_small_prefab: cc.Prefab,
        boss_big_prefab: cc.Node,
        cloud_prefab: cc.Node,
    },

    start() {
        groupBoss = this.node;
    },
    create_Boss() {
        // let bossSmall = cc.instantiate(this.boss_small_prefab);
        // let bossBig = cc.instantiate(this.boss_big_prefab);
        // let cloud = cc.instantiate(this.cloud_prefab);
        this.cloud_prefab.active = true;
        this.boss_big_prefab.active = true;
        // groupBoss.addChild(bossSmall);
        // groupBoss.addChild(bossBig);
        // groupBoss.addChild(cloud);
        window.countDestroyed = 0;
        window.endGame = true;
    },
    update(dt) {
        if (window.countDestroyed == 27) {
            this.create_Boss()
        }
    },
});
