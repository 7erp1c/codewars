function howMuchILoveYou(nbPetals) {
    let dict = {1:'I love you',
        2:'a little',
        3:'a lot',
        4:'passionately',
        5:'madly',
        0:'not at all'}
    return dict[nbPetals % 6]
}