export const musicPlayerInit = () => {
    const audio = document.querySelector('.audio')
    const audioImg = document.querySelector('.audio-img')
    const audioHeader = document.querySelector('.audio-header')
    const audioPlayer = document.querySelector('.audio-player')
    const audioNavigation = document.querySelector('.audio-navigation')
    const audioButtonPlay = document.querySelector('.audio-button__play')
    const audioProgress = document.querySelector('.audio-progress')
    const audioProgressTiming = document.querySelector('.audio-progress__timing')
    const audioTimePassed = document.querySelector('.audio-time__passed')
    const audioTimeTotal = document.querySelector('.audio-time__total')

    const playlist = ['hello', 'flow', 'speed']

    let trackIndex = 0

    const loadTrack = () => {
        const isPlayed = audioPlayer.paused
        const track = playlist[trackIndex]
        audioImg.src =  `./audio/${track}.jpg`
        audioHeader.textContent = track.toUpperCase()
        audioPlayer.src = `./audio/${track}.mp3`

        if(isPlayed) {
            audioPlayer.pause()
        } else {
            audioPlayer.play()
        }
    }

    audioNavigation.addEventListener('click', event => {
        const target = event.target

        if(target.classList.contains('audio-button__play')) {
            audio.classList.toggle('play')        
            audioButtonPlay.classList.toggle('fa-play')
            audioButtonPlay.classList.toggle('fa-pause')

            if(audioPlayer.paused) {
                audioPlayer.play()
            } else {
                audioPlayer.pause()
            }
            const track = playlist[trackIndex]
            audioHeader.textContent = track.toUpperCase()
        }

        if(target.classList.contains('audio-button__prev')) {
            if(trackIndex !== 0) {
                trackIndex--
            } else {
                trackIndex = playlist.length - 1
            }
            loadTrack()
        }
        
        if(target.classList.contains('audio-button__next')) {
            if(trackIndex === playlist.length - 1) {
                trackIndex = 0
            } else {
                trackIndex++
            }
            loadTrack()
        }
    })
}