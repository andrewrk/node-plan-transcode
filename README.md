See [node-plan](https://github.com/superjoe30/node-plan).

Backend is [node-sox](https://github.com/superjoe30/node-sox).

### input

  * `tempPath` - audio to transcode
  * `makeTemp` - a function which generates a tempfile and accepts a suffix

### output

  * `tempPath` - path to the transcoded audio

### options

  * `format` - destination format, such as 'wav'. defaults to 'mp3'.
  * `sampleRate` - destination sample rate. defaults to 44100.
  * `channelCount` - destination channel count. defaults to 2.
  * `bitRate` - destination bitrate. defaults to 196608 (192kbps)
  * `compressionQuality` - compression speed vs quality. defaults to 5. see `man soxformat` search for `-C` for more info

### exports

  * `src` - info about source audio file
    * `format`
    * `sampleRate`
    * `channelCount`
    * `sampleCount`
    * `duration`
    * `bitRate`
  * `dest` - info about destination audio file
    * `format`
    * `sampleRate`
    * `channelCount`
    * `sampleCount`
    * `duration`
    * `bitRate`
