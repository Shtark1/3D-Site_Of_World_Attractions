// 3D scroll

let zSpacing = -1100,
    lastPos = zSpacing / 5
    $frames = document.getElementsByClassName('frame')
    frames = Array.from($frames)
    zVal = []

window.onscroll = function() {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top

    lastPos = top

    frames.forEach(function(n, i) {
        zVal.push((i * zSpacing) + zSpacing)
        zVal[i] += delta * -5
        let frame = frames[i],
            transform = `translateZ(${zVal[i]}px)`
            opacity = zVal[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })

}

window.scrollTo(0, 1)

// audio

let sound = document.querySelector('.sound')
    audio = document.querySelector('.audio')

sound.addEventListener('click', e=> {
    sound.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
    sound.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
    audio.pause()
}