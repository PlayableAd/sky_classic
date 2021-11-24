let colliderCount = 0;
let killEnemy = 1
cc.Class({
    extends: cc.Component,

    properties: {
        Explore_Prefab: cc.Prefab,
        Collider_Prefab: cc.Prefab,
        die_Audio: cc.AudioClip
    },

    onBeginContact: function (contact, selfCollider, otherCollider) {
        // bắn 2 lần mới tiêu diệt được đich
        if (colliderCount < killEnemy) {
            colliderCount++;
            let collider = cc.instantiate(this.Collider_Prefab);
            this.node.parent.addChild(collider);

            collider.setPosition(selfCollider.node.getPosition().x - 10, selfCollider.node.getPosition().y + 35);

            selfCollider.node.destroy();

        } else {
            let explore = cc.instantiate(this.Explore_Prefab);
            this.node.parent.addChild(explore);

            explore.setPosition(selfCollider.node.getPosition().x, selfCollider.node.getPosition().y + 30);
            cc.audioEngine.playEffect(this.die_Audio, false, 0.1);

            otherCollider.node.destroy();
            selfCollider.node.destroy();
            // if(otherCollider.node.name){
                window.countDestroyed++;
            // }
            colliderCount = 0;
        }
    },

});
