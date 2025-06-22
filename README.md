# RTXVideo-fix
这是一个 Tampermonkey 油猴脚本，用于解决开启 RTX Video 且倍速播放视频时对显卡带来的过度负载

你可以直接在 Greasy Frok 下载该脚本：https://greasyfork.org/zh-CN/scripts/540389-rtx-video-fix?locale_override=1

RTX Video 是 NVIDIA 推出的 AI 视频增强技术，专为 GeForce RTX 显卡设计，包括两个核心功能：RTX VSR 和 RTX Video HDR；
RTX Video 在开启时会对 GPU 带来一定程度的负载（开启 RTX VSR 尤甚），在常速播放视频时性能开销尚可被接受。但当倍速播放视频时，由于单位时间内视频流流量翻倍，令 GPU 功耗激增且对其稳定性提出了不必要的极高要求，以至于对 GPU 进行降压超频能过 3DMark 稳定性测试但过不了 Bili3xVideoBench 是家常便饭（笑；
该脚本原理非常简单，当视频上方出现模糊遮罩时 RTX Video 会自行禁用，借此特性可以在倍速播放视频时，通过在右下角渲染 1px*1px 的模糊遮罩以禁用 RTX Video

*本脚本 100% 由 GPT-4o 与爱❤制作*
