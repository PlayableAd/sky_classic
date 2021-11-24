let groupEnemy;
let wave1 = true;
let count = 0;
let numberEnemies = 10;
let delayShooting = 20;
let timeShootingCount = 0;
let map;

cc.Class({
    extends: cc.Component,

    properties: {
        enemy1_prefab: cc.Prefab,
        enemy2_prefab: cc.Prefab
    },
    start() {
        groupEnemy = this.node;
        map = {
            "backgroundcolor": "#ffff7f",
            "compressionlevel": -1,
            "height": 17,
            "infinite": false,
            "layers": [
                {
                    "compression": "",
                    "data": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                    "encoding": "base64",
                    "height": 17,
                    "id": 9,
                    "name": "BG",
                    "opacity": 1,
                    "type": "tilelayer",
                    "visible": true,
                    "width": 21,
                    "x": 0,
                    "y": 0
                },
                {
                    "draworder": "topdown",
                    "id": 3,
                    "name": "Enemies",
                    "objects": [
                        {
                            "height": 32,
                            "id": 7,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 320,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 67,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 416,
                            "y": 480
                        },
                        {
                            "height": 32,
                            "id": 95,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 128,
                            "y": 480
                        },
                        {
                            "height": 32,
                            "id": 96,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 224,
                            "y": 480
                        },
                        {
                            "height": 32,
                            "id": 97,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 32,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 98,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 32,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 99,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 128,
                            "y": 192
                        },
                        {
                            "height": 32,
                            "id": 100,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 224,
                            "y": 96
                        },
                        {
                            "height": 32,
                            "id": 101,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 320,
                            "y": 0
                        },
                        {
                            "height": 32,
                            "id": 102,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 416,
                            "y": 96
                        },
                        {
                            "height": 32,
                            "id": 103,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 512,
                            "y": 192
                        },
                        {
                            "height": 32,
                            "id": 104,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 608,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 105,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 608,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 106,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": true
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 512,
                            "y": 480
                        },
                        {
                            "height": 32,
                            "id": 107,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 320,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 108,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 416,
                            "y": 192
                        },
                        {
                            "height": 32,
                            "id": 109,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 320,
                            "y": 192
                        },
                        {
                            "height": 32,
                            "id": 110,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 224,
                            "y": 192
                        },
                        {
                            "height": 32,
                            "id": 111,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 224,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 112,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 128,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 113,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 512,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 114,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 416,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 115,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 128,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 116,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 224,
                            "y": 384
                        },
                        {
                            "height": 32,
                            "id": 117,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 512,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 118,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 416,
                            "y": 288
                        },
                        {
                            "height": 32,
                            "id": 119,
                            "name": "",
                            "properties": [
                                {
                                    "name": "bound",
                                    "type": "bool",
                                    "value": false
                                }],
                            "rotation": 0,
                            "type": "",
                            "visible": true,
                            "width": 32,
                            "x": 320,
                            "y": 96
                        }],
                    "opacity": 1,
                    "type": "objectgroup",
                    "visible": true,
                    "x": 0,
                    "y": 0
                },
                {
                    "draworder": "topdown",
                    "id": 8,
                    "name": "Player",
                    "objects": [],
                    "opacity": 1,
                    "type": "objectgroup",
                    "visible": true,
                    "x": 0,
                    "y": 0
                }],
            "nextlayerid": 11,
            "nextobjectid": 120,
            "orientation": "orthogonal",
            "renderorder": "right-down",
            "tiledversion": "1.7.0",
            "tileheight": 32,
            "tilesets": [],
            "tilewidth": 32,
            "type": "map",
            "version": "1.6",
            "width": 21
        }
        this.create_Enemy()
    },

    create_Enemy() {
        map.layers[1].objects.map((obj) => {
            if (obj.properties[0].value) {
                let enemy = cc.instantiate(this.enemy2_prefab);
                enemy.setPosition(obj.x - 320, obj.y - 288)
                groupEnemy.addChild(enemy);
                timeShootingCount = 0;
            } else {
                let enemy = cc.instantiate(this.enemy1_prefab);
                enemy.setPosition(obj.x - 320, obj.y - 288)
                groupEnemy.addChild(enemy);
                timeShootingCount = 0;
            }
        })
    }

});