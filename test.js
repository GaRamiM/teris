const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        create: function (scene) {
            scene.add.circle(400, 300, 50, 0xff0000);
        }
    }
};

const game = new Phaser.Game(config);