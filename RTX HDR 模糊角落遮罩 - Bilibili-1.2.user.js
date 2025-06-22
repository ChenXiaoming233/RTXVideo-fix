// ==UserScript==
// @name         RTX HDR 模糊角落遮罩 - Bilibili
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  使用小面积模糊遮罩干扰 RTX HDR，但最大程度不遮住视频主内容
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const OVERLAY_ID = '__bili_hdr_corner_blur__';

    function tryInjectOverlay() {
        const video = document.querySelector('video');
        const wrap = document.querySelector('.bpx-player-video-wrap');
        if (!video || !wrap) return;

        let overlay = document.getElementById(OVERLAY_ID);
        const rate = video.playbackRate;

        if (rate > 1.0 && !overlay) {
            const rect = wrap.getBoundingClientRect();

            // 设定遮罩尺寸（右下角 120x120）
            const size = 1;

            overlay = document.createElement('div');
            overlay.id = OVERLAY_ID;
            Object.assign(overlay.style, {
                position: 'fixed',
                left: `${rect.right - size}px`,
                top: `${rect.bottom - size}px`,
                width: `${size}px`,
                height: `${size}px`,
                backdropFilter: 'blur(1px)',
                webkitBackdropFilter: 'blur(1px)',
                pointerEvents: 'none',
                zIndex: '99999999',

            });
            document.body.appendChild(overlay);
            console.log('[HDR控制] 小角落模糊遮罩已插入');
        } else if (rate === 1.0 && overlay) {
            overlay.remove();
            console.log('[HDR控制] 模糊遮罩已移除');
        }

        // 实时跟随播放器位置
        if (overlay && wrap) {
            const rect = wrap.getBoundingClientRect();
            const size = 120;
            Object.assign(overlay.style, {
                left: `${rect.right - size}px`,
                top: `${rect.bottom - size}px`
            });
        }
    }

    setInterval(tryInjectOverlay, 10);
})();
