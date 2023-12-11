let ownedCatAndDog = function(catYears, dogYears) {
    function getAge( years,a) {
        return years < 15 ? 0 : years < 24 ? 1 : 2 + (years - 24) / a;
    }
    return [Math.floor(getAge(catYears, 4)), Math.floor(getAge(dogYears, 5))];
}