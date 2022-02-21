(()=>{"use strict";var e,t={596:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.SHIBA_WALK="shiba-walk"}(a||(a={})),t.default=a},55:(e,t)=>{var a;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.EIGHT_BIT_DETECTIVE="8bit_detective",e.BACK_BUILDINGS="back-builings",e.FAR_BUILDINGS="far-builings",e.FOREGROUND="foreground",e.SHIBA="shiba"}(a||(a={})),t.default=a},168:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(a(596)),i=s(a(55));class o extends Phaser.Scene{constructor(){super("main-scene"),this.scrollSpeed=1}init(){}preload(){this.load.image(i.default.FAR_BUILDINGS,"assets/far-buildings.png"),this.load.image(i.default.BACK_BUILDINGS,"assets/back-buildings.png"),this.load.image(i.default.FOREGROUND,"assets/foreground.png"),this.load.spritesheet(i.default.SHIBA,"assets/shiba.png",{frameWidth:32,frameHeight:32}),this.load.audio(i.default.EIGHT_BIT_DETECTIVE,"assets/8bit_detective.mp3")}create(){const e=this.scale.width,t=this.scale.height;this.backgroundFar=this.add.tileSprite(0,0,e,t,i.default.FAR_BUILDINGS).setScale(2),this.backgroundBack=this.add.tileSprite(0,-25,e,t,i.default.BACK_BUILDINGS).setScale(2),this.backgroundForeground=this.add.tileSprite(0,-45,e,t,i.default.FOREGROUND).setScale(2.25),this.anims.create({key:r.default.SHIBA_WALK,frames:this.anims.generateFrameNumbers(i.default.SHIBA,{start:4,end:7,first:4}),frameRate:10,repeat:-1}),this.add.sprite(100,t-55,i.default.SHIBA).play(r.default.SHIBA_WALK).setScale(4),this.sound.play(i.default.EIGHT_BIT_DETECTIVE)}update(){this.backgroundFar&&(this.backgroundFar.tilePositionX+=this.scrollSpeed/8),this.backgroundBack&&(this.backgroundBack.tilePositionX+=this.scrollSpeed/6),this.backgroundForeground&&(this.backgroundForeground.tilePositionX+=this.scrollSpeed/4)}}t.default=o},752:function(e,t,a){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),a(260);const r=s(a(168));var i;!function(e){class t extends Phaser.Game{constructor(){super({width:640,height:360,type:Phaser.AUTO,parent:"content",render:{pixelArt:!0},physics:{default:"arcade"},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},scene:[r.default]})}}e.Game=t}(i||(i={})),new i.Game}},a={};function s(e){var r=a[e];if(void 0!==r)return r.exports;var i=a[e]={exports:{}};return t[e].call(i.exports,i,i.exports,s),i.exports}s.m=t,e=[],s.O=(t,a,r,i)=>{if(!a){var o=1/0;for(u=0;u<e.length;u++){for(var[a,r,i]=e[u],l=!0,n=0;n<a.length;n++)(!1&i||o>=i)&&Object.keys(s.O).every((e=>s.O[e](a[n])))?a.splice(n--,1):(l=!1,i<o&&(o=i));if(l){e.splice(u--,1);var d=r();void 0!==d&&(t=d)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,r,i]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};s.O.j=t=>0===e[t];var t=(t,a)=>{var r,i,[o,l,n]=a,d=0;if(o.some((t=>0!==e[t]))){for(r in l)s.o(l,r)&&(s.m[r]=l[r]);if(n)var u=n(s)}for(t&&t(a);d<o.length;d++)i=o[d],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(u)},a=self.webpackChunkyeppyshiba_com=self.webpackChunkyeppyshiba_com||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var r=s.O(void 0,[216],(()=>s(752)));r=s.O(r)})();
//# sourceMappingURL=app.js.map