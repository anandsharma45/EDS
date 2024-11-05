/*
 * Video Block
 * Show a video referenced by a link
 * https://www.hlx.live/developer/block-collection/video
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function embedYoutube(url, autoplay, background) {
}

function embedVimeo(url, autoplay, background) {
}

function getVideoElement(source, autoplay, background) {
   const video = document.createElement('video');
   video.setAttribute('controls', '');
   if (autoplay) video.setAttribute('autoplay', '');
   if (background) {
      video.setAttribute('loop', '');
      video.setAttribute('playsinline', '');
      video.removeAttribute('controls');
      video.addEventListener('canplay', () => {
         video.muted = true;
         if (autoplay) video.play();
      });
   }

   const sourceEl = document.createElement('source');
   sourceEl.setAttribute('src', source);
   sourceEl.setAttribute('type', `video/${source.split('.').pop()}`);
   video.append(sourceEl);

   return video;
}

const loadVideoEmbed = (block, link, autoplay, background) => {
};

export default async function decorate(block) {
}