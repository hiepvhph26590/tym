new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: " ANH NHÀ Ở ĐÂU THẾ ",
          artist: "Báo Con",
          cover: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/296866632_363269545987963_4295805560715503977_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=1VBO8f2WtTgAX_oFngr&_nc_ht=scontent-sin6-2.xx&oh=00_AfBqRyF-2PR43QYfSXZ2M9Bn8lCmH7gqqQF_6542IM_XRQ&oe=6463C9EE",
          source: "mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=iE52-XXnQqs",
          favorited: false
        },
        {
          name: "-237°c",
          artist: "Phùng Kim Thao",
          cover: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/300667012_376391278009123_7806389875759405245_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FRCoQtYbATUAX9_cJB9&_nc_ht=scontent-sin6-2.xx&oh=00_AfDTZO_FS3XbnGBIdhfd1BtZT6BDG0QgUlmV2xtgtYbT9w&oe=6464F23D",
          source: "mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=f33RGs2oPlU",
          favorited: true
        },
        {
          name: "Hà Nội có phải là anh",
          artist: "Báo Con",
          cover: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/280439320_307150618266523_4008098010125214731_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=oGQOfPwNQK8AX8rcFJb&_nc_ht=scontent-sin6-1.xx&oh=00_AfDSeHKDWOuEqRL4rEUggLn4WIHn9Nx_UjihVffKnHdU3A&oe=6463B670",
          source: "mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=3G8P3nj3sK0",
          favorited: false
        },
        {
          name: "Tình Đắng Như Ly Cà Phê",
          artist: "Phùng Kim Thao",
          cover: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/240667506_160196946295225_1646464836881652029_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nfWDTcme3-MAX_zljlL&_nc_ht=scontent-sin6-2.xx&oh=00_AfC6LeOw2sr_9PdyNARtWG9KtOn-Yz4W5JbJFgk8tbXRBw&oe=6463B7E9",
          source: "mp3/4.mp3",
          url: "youtube.com/watch?v=ae2rt9DnnqI",
          favorited: false
        },
        {
          name: " EM THÍCH",
          artist: "Báo Con",
          cover: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/302683646_386874963627421_7277946294997434292_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Bp3KFlOluuIAX-V0_Lu&_nc_ht=scontent-sin6-4.xx&oh=00_AfBKCNC0vuphO9ljKXXDIROXMEfF9V-IWcCFMGwtGhp7CQ&oe=64652A68",
          source: "mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=WDA7OIXXW1U",
          favorited: true
        },
        {
          name: "Thích Em Hơi Nhiều ",
          artist: "Phùng Kim Thao",
          cover: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/307864522_395896232725294_2042367264520343189_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eKEnFjBhzXEAX8NEWqy&_nc_ht=scontent-sin6-3.xx&oh=00_AfARC3XGBG-h1OxiCDXzplDf9CfqFwkzxQmtG5Rlm_epTg&oe=64645A24",
          source: "mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=muSn7PSazhE",
          favorited: false
        },
        {
          name: "Your Smile",
          artist: "Báo Con",
          cover: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/291444135_344892121159039_2021069739655303741_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=BPn89feyslkAX-43oBc&_nc_ht=scontent-sin6-4.xx&oh=00_AfAzkVjjFav_QJ19Ug9YFYKwp0lhmRYvBSicYdNOKq4rYA&oe=6464E6E5",
          source: "mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=naGkaemRfzU",
          favorited: true
        },
        {
          name: "TƯƠNG TƯ",
          artist: "Phùng Kim Thao",
          cover: "https://scontent-sin6-2.xx.fbcdn.net/v/t39.30808-6/307315293_417627230552194_175095115558145806_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=GsMKMSCm5k4AX-r_Jt-&_nc_ht=scontent-sin6-2.xx&oh=00_AfAhl1ILY0RvBsZWy9Q_yzdQay-LvQ__DN7G9K_4lF9Tpg&oe=6465A184",
          source: "mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=Ss56EcAp8JU",
          favorited: false
        },
        {
          name: "Váy hoa nhí",
          artist: "Báo Con",
          cover: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/275433978_266888892292696_5480557570855733783_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7_RFnk5KKk0AX-dAzXC&_nc_ht=scontent-sin6-3.xx&oh=00_AfAWOo9Suzc6OUtwt8Uca21ZaKasevIhwHfeY0oGZ12mrg&oe=6464E1E8",
          source: "mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=l0OGoMqgS2U",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
