class Character extends MovableObject {
    y = 180;
    height = 250;
    width = 150;

    constructor() {
        super().loadImage('../img/2_character_pepe/1_idle/idle/I-1.png')
        this.loadImages([
            'img/2_character_pepe/2_walk/W-21.png',
            'img/2_character_pepe/2_walk/W-22.png',
            'img/2_character_pepe/2_walk/W-23.png',
            'img/2_character_pepe/2_walk/W-24.png',
            'img/2_character_pepe/2_walk/W-25.png',
            'img/2_character_pepe/2_walk/W-26.png'
        ])
    }

    moveRight() {

    }
    
    jump() {

    }

}