//Сдали тест, получили оценки, ты вепиндрёжник, который хочет узнать
// сильнее твой разум среднего по классу или нет:



function betterThanAverage(classPoints, yourPoints) {

    return classPoints.reduce((a,b)=>a+b,0)/classPoints.length < yourPoints;

}