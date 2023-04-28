export default {
  playAudio(audio) {
    audio.play();
  },

  pauseAudio(audio, btn) {
    audio.pause();
    if (btn) {
      btn.classList.remove('audio-btn_pause');
    }
  },

  stopAudio(audio, btn) {
    audio.pause();
    audio.currentTime = 0;
    if (btn) btn.classList.remove('audio-btn_pause');
  },

  handlerAudio(audio, obj, flag, btn) {
    if (!obj[flag]) {
      audio.play();
      audio.volume = 0.5;
      obj[flag] = true;
      btn.classList.add('audio-btn_pause');
    } else {
      audio.pause();
      obj[flag] = false;
      btn.classList.remove('audio-btn_pause');
    }
  },

  answerSoundPlay(sound, volume) {
    sound.volume = volume;
    sound.play();
  },

  showAudioProgress(audio, progressBar, time, startTime) {
    let duration = audio.duration;
    let currentTime = audio.currentTime;
    let progress = duration ? (currentTime / duration) * 100 : 0;
    time.innerHTML = duration ? this.formatTime(duration) : '00:00';
    startTime.innerHTML = this.formatTime(currentTime);
    progressBar.value = progress;
  },

  resetProgress(progressBar) {
    progressBar.value = 0;
  },

  changeProgress(progressBar, audio) {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
  },

  formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10) {
      sec = `0${sec}`;
    };
    if (min < 10) {
      min = `0${min}`;
    };
    return `${min}:${sec}`;
  },

  changeVolume(range, audio, btn) {
    if (range.value == 0) {
      audio.volume = 0;
      btn.classList.add('volume-btn_mute')
    } else {
      btn.classList.remove('volume-btn_mute')
      audio.volume = range.value / 100
    }
  },

  muteSound(btn, audio) {
    console.log(audio.muted)
    if(!audio.muted){
      audio.muted = true;
      btn.classList.add('volume-btn_mute')

    } else {
      audio.muted = false;
      btn.classList.remove('volume-btn_mute');
    }
  }
}