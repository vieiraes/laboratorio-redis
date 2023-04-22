export function delayTime(req, res, next) {
    const time = Math.random() * 5000
    setTimeout(() => {
        next()  // nao eh necessario colocar o return, pois o next ja retorna o valor
    }, time)
}