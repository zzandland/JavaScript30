(function() {
  const video = document.querySelector('.player__video.viewer');
  const volume = document.querySelector('input[name="volume"]');
  const playbackRate = document.querySelector('input[name="playbackRate"]');
  const buttons = document.querySelectorAll('.player__button');
  const totalProgress = document.querySelector('.progress');

  function handlePlayClick() {
    const playButton = document.querySelector('.player__button.toggle');
    if (video.paused) {
      video.play();
      playButton.textContent = '';
    } else {
      video.pause();
      playButton.textContent = '►';
    }
  }

  function handleTimeChange() {
    if (this.dataset.skip) video.currentTime += parseInt(this.dataset.skip);
  }

  function handleProgressClick(e) {
    const progressPercent = (e.offsetX / this.offsetWidth) * video.duration;
    video.currentTime = progressPercent;
  }

  function updateProgressBar() {
    let videoPercent = video.currentTime / video.duration * 100;
    document.documentElement.style.setProperty('--progress', videoPercent + '%');
  }

  video.addEventListener('click', handlePlayClick);
  video.addEventListener('timeupdate', updateProgressBar);
  volume.addEventListener('input', () => video.volume = volume.value);
  playbackRate.addEventListener('input', () => video.playbackRate = playbackRate.value);
  buttons.forEach(button => button.addEventListener('click', handleTimeChange));
  totalProgress.addEventListener('click', handleProgressClick);
}())
