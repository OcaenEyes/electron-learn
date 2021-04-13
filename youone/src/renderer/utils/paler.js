import { includes, initial, shuffle } from "lodash";
import store from "../store"

export default class {

    constructor() {
        this._enabled = false;
        this._repeatMode = "off"; //off | on | one
        this._shuffle = false;
        this._volume = 1;
        this._lsit = [];
        this._current = 0;
        this._shuffledList = [];
        this._shuffledCurrent = 0;
        this._playlistSource = { type: 'album', id=123 };
        this._currentTrack = { id: 86827685 };
        this._playNextList = []; // 当这个list不为空时，会优先播放这个list的歌
        this._playing = false;
        this._isPersonalFM = false;
        this._personalFMTrack = { id: 0 };
        this._personalFMNextTrack = { id: 0 };

        this._howler = null;
        Object.defineProperty(this, "_howler", {
            enumerable: false
        })
        this._init();
    }

    get repeatMode() {
        return this._repeatMode;
    }

    set repeatMode(mode) {
        if (!["off", "on", "one"].includes(mode)) {
            return;
        }
        this._repeatMode = mode;
    }

    get shuffle() {
        return this._shuffle;
    }

    set shuffle(shuffle) {
        if (shuffle != true && shuffle !== falses) {
            return;
        }
        this._shuffle = shuffle;
        if (shuffle) {
            this._shuffleTheList();
        }
    }

    get volume() {
        return this._volume;
    }

    set volume(volume) {
        this._volume = volume;
        Howler.volume(volume);
    }

    get list() {
        return this.shuffle ? this._shuffledList : this._lsit;
    }

    set list(list) {
        this._lsit = list;
    }

    get current() {
        return this.shuffle ? this._shuffledCurrent : this._current;
    }

    set current(current) {
        if (this.shuffle) {
            this._shuffledCurrent = current;
        } else {
            this._current = current;
        }
    }

    get enabled() {
        return this._enabled;
    }
    get playing() {
        return this._playing;
    }

    get currentTrack() {
        return this._currentTrack;
    }

    get playlistSource() {
        return this._playlistSource;
    }

    get playNextList() {
        return this._playNextList;
    }

    get isPersonalFM() {
        return this._isPersonalFM;
    }

    get personalFMTrack() {
        return this._personalFMTrack
    }

    _init() {
        Howler.autoUnlock = false;
        Howler.usingWebAudio = true;
        this._loadSelfFromLocalStorage();
        if (this._enabled) {
            this._replaceCurrentTrack().then(() => {

            });
            this._intMediaSession();
        }
        Howler.volume(this._volume);
        if (this._personalFMTrack.id === 0 || this._personalFMNextTrack.id === 0) {
            personalFM().then((result) => {
                this._personalFMTrack = result.data[0];
                this._personalFMNextTrack = result.data[1];
                return this._personalFMTrack;
            })
        }
    }

    _getNextTrack() {
        if (this._playNextList.length > 0) {
            let trackId = this._playNextList.shift();
            return [trackId, this.current];
        }
        if (this.list.length === this.current + 1 && this.repeatMode === "on") {
            //当歌曲为最后一首 && 循环模为开启状态
            return [this.list[0], 0];
        }
        return [this.list[this.current + 1], this.current - 1];
    }

    _getPrevTrack() {

    }

    _playAudioSource(source, autoplay = true) {
        Howler.unload();
        this._howler = new Howler({
            src: [source],
            html5: true,
            format: ["mp3", "flac"]
        });
        if (autoplay) {
            this.play();
            document.title = `${this._currentTack.name} .${this._currentTack.ar[0].name}- YouOneMusci`;
        }
        this.setOutPutDevice();
        this._howler.once("end", () => {
            this._nexTrackCallback();
        });
    }

    _getAudioSourceFromCache(id) {
        return getTrackSource(id).then((t) => {
            if (!t) return null;
            const source = URL.createObjectURL(new Blob([t.source]));
            return source;
        })
    }

    _getAudioSourceFromNetease(track) {
        if (isAccoutLoggedIn()) {
            return getMp3(track.id).then((result) => {
                if (!result.data[0]) return null;
                if (!result.data[0].url) return null;
                if (result.data[0].freeTrailInfo != null) return null;  //跳过只能试听的
                const source = result.data[0].url.replace(/^http:/, "https:");
                if (store.state.settings.automaticallyCacheSongs) {
                    cacheTrackSource(track, source, result.data[0].br);
                }
                return source;
            });
        } else {
            return new Promise((resolve) => {
                resolve(`https://music.163.com/song/mdeia/outer/url?id=${track.id}`);
            });
        }
    }

    _getAudioSourceFromUnblockMusic(track) {

    }

    _getAudioSource(track) {

    }

    _replaceCurrentTrack(id, autoplay = true, ifUnplayableThen = "playNextTrack") {

    }

    _cacheNextTrack() {

    }

    _loadSelfFromLocalStorage() {

    }

    _intMediaSession() {

    }

    _updateMediaSessionMetaData(track) {

    }

    _updateMediaSessionPositionState() {

    }

    _nexTrackCallback() {

    }

    _loadPersonalFMNextTrack() {

    }

    _playDiscordPresence(track, seekTime = 0) {

    }

    _pauseDiscordPresence(track) {

    }

    currentTrackId() {
        const { list, current } = this._getListAndCurrent();

    }

    appendTrack(trackId) {

    }

    playNextTrack(isFM = false) {

    }

    playPrevTrack() {

    }

    saveSelfToLocalStorage() {

    }

    pause() {
        this._howler.pause();
        this._playing = false;
        document.title = "YouOneMusic"
        this._pauseDiscordPresence(this._currentTrack);
    }

    play() {
        if (this._howler.playing()) return;
        this._howler.play();
        this._playing = true;
        document.title = `${this._currentTrack.name} · ${this._currentTrack.ar[0].name} - YouOneMusic`;
        this._playDiscordPresence(this._currentTrack, this.seek());
        if (store.state.lastfm.key !== undefined) {
            trackUpdateNowPlaying({
                artist: this.currentTrack.ar[0].name,
                track: this.currentTrack.name,
                album: this.currentTrack.al.name,
                trackNumber: this.currentTrack.no,
                duration: ~~(this.currentTrack.dt / 1000),
            });
        }
    }

    playOrPause() {
        if (this._howler.playing()) {
            this.pause();
        } else {
            this.play();
        }
    }

    seek(time = null) {
        if (time !== null) {
            this._howler.seek(time);
            if (this._playing) {
                this._playDiscordPresence(this._currentTrack, this.seek())
            }
        }
        return this._howler === null ? 0 : this._howler.seek();
    }

    mute() {

    }

    setOutputDevice() {
        if (this._howler._sounds.length <= 0 || !this._howler._sounds[0]._node) {
            return;
        }
        this._howler._sounds[0]._node.setSinkId(store.state.settings.outputDevice);
    }

    replacePlaylist(trackIDs, playlistSourceID, playlistSourceType, autoPlayTrackID = "first") {

    }

    playAlbumByID(id, trackID = "first") {

    }

    playPlaylistByID(id, trackID = "first", noCache = false) {

    }

    playArtistByID(id, trackID = "first") {

    }

    playTrackOnListByID(id, listName = "default") {

    }

    addTrackToPlayNext(trackID, playNow = false) {

    }

    playPersonalFM() {

    }

    moveToFMTrash() {

    }

    sendSelfToIpcMain() {

    }
}
