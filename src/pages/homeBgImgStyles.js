

function linearGradientStyle() {
    return {
        "backgroundImage": `linear-gradient(${Array.prototype.join.call(arguments, ', ')})`
    }
}

/*
    0 - 6
 */
const bgStyles = [
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
    [linearGradientStyle('120deg', '#000 0%', '#fff 100%')],
]

console.log(bgStyles)

export default bgStyles