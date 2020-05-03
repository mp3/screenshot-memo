import { desktopCapturer } from 'electron'

export const capture = () => {
  desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async (sources) => {
    for (const source of sources) {
      if (source.name === 'Electron') {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id,
                minWidth: 1280,
                maxWidth: 1280,
                minHeight: 720,
                maxHeight: 720
              }
            } as any
          })
  
          handleStream(stream)
        } catch (error) {
          handleError(error)
        }
        return
      }
    }
  })  
}

const handleStream = (stream: MediaStream) => {
  const video = document.querySelector('video')
  if (video) {
    video.srcObject = stream
    video.onloadedmetadata = (_event) => video.play()
  }
}

const handleError = (error: any) => {
  console.log(error)
}
