# Change Log

## 0.0.33 (2024-03-07)

- Michelle llm prompt (#21) ([eb8bffd](https://bitbucket.org/projects/test/repos/my-project/commits/eb8bffd7a6080cdbf0dd388544c7a99c98441979))
- feat: remove STT latency stub for now ([327bab7](https://bitbucket.org/projects/test/repos/my-project/commits/327bab7080bc9d3c7ffe1dd1f2d1e47848ad8b07))

## 0.0.32 (2024-03-06)

- feat: fixing toast output, switching back to gpt-3.5-turbo-0125 ([2f0c108](https://bitbucket.org/projects/test/repos/my-project/commits/2f0c108927c1c202e07a404e6393989153baf273))

## 0.0.31 (2024-03-06)

- feat: tweaking the TTS input script mid-request ([b312db8](https://bitbucket.org/projects/test/repos/my-project/commits/b312db8813ef042b83c85e5cd28cda8fb64c93f6))

## 0.0.30 (2024-03-06)

- feat: remove chance for two websocket connections to open - introduce toast ([100b781](https://bitbucket.org/projects/test/repos/my-project/commits/100b7819034a029cf8b1fa7ab302a4b803def876))

## 0.0.29 (2024-03-06)

- fix: build issues ([f6fd30a](https://bitbucket.org/projects/test/repos/my-project/commits/f6fd30adb6776032c0b8a71f6c6bf91611d18fcf))

## 0.0.28 (2024-03-06)

- fix: firefox would still have zerobyte data in queue, closing connection ([0dfbe3a](https://bitbucket.org/projects/test/repos/my-project/commits/0dfbe3a31c1bbf00ace4072bb7bc11b26c7de820))

## 0.0.27 (2024-03-06)

- feat: rearchitect deepgram connection into context ([67f0fe0](https://bitbucket.org/projects/test/repos/my-project/commits/67f0fe0dc88fe888f407e1e9dc6b388c1cbc7229))

## 0.0.26 (2024-03-05)

- fix: rerunning connection creation when every context changed was breaking events ([ae726f4](https://bitbucket.org/projects/test/repos/my-project/commits/ae726f412e24ac4722db52f752352437ceabd095))
- feat: fix welcome message to be less... funky ([ef0fc68](https://bitbucket.org/projects/test/repos/my-project/commits/ef0fc68d0f33b3fd60e94d9080c89222b85458de))
- fix: mute microphone when window visibility changes to !==visible ([c523108](https://bitbucket.org/projects/test/repos/my-project/commits/c523108cbbbb8dc10c65542ef3a0156e18d29fcf))
- fix: always add a speech_final transcript to the array, but trim the concat audio for the utterance space joining ([f5c483c](https://bitbucket.org/projects/test/repos/my-project/commits/f5c483cbb669cafef95d12afab4ec17740f50680))
- chore: resolve incomplete-is-final errors ([22a5474](https://bitbucket.org/projects/test/repos/my-project/commits/22a54749e338c0968bf2824c3e16787882d45438))
- chore: updating known issues ([7fdc875](https://bitbucket.org/projects/test/repos/my-project/commits/7fdc8759f2dbda646eb618f469b46f01a2c4cfe2))
- fix: don't request an API key when there is a connection or existing key ([7df0b2a](https://bitbucket.org/projects/test/repos/my-project/commits/7df0b2a446cd0adb5abe492691867168b06ca2d7))

## 0.0.25 (2024-03-05)

- feat: edit controls design ([4a67a18](https://bitbucket.org/projects/test/repos/my-project/commits/4a67a18f1461389d8010f0295292e9adc2d685c6))
- feat: context driven voice model ([b3537ab](https://bitbucket.org/projects/test/repos/my-project/commits/b3537ab80dc7debe96bada7b1d3e49fdd404d444))
- feat: show voice avatars ([e21454d](https://bitbucket.org/projects/test/repos/my-project/commits/e21454d5c4c28a5058abc291923d972117fee9a8))
- feat: add voice selection menu ([1b790dd](https://bitbucket.org/projects/test/repos/my-project/commits/1b790dd8af29fec8c5901056478738f8878d71dd))
- feat: add accent and language to model selection ([0803c8c](https://bitbucket.org/projects/test/repos/my-project/commits/0803c8c341dd02fde4dfaa4d96df0827f2368a3b))
- feat: use product icons on launchpage ([eee7b23](https://bitbucket.org/projects/test/repos/my-project/commits/eee7b230370607fede453191cf7c5e9cf774a9c8))
- feat: remove product icons in favour of green bullets ([91caa7f](https://bitbucket.org/projects/test/repos/my-project/commits/91caa7fdee0e3837dc0b257e66f4c4cb7df6805d))
- feat: tweak bullets ([b466a14](https://bitbucket.org/projects/test/repos/my-project/commits/b466a14574dd49c1facd4496010195185f5ce928))

## 0.0.24 (2024-03-05)

- feat: add real network latency for tts ([5a03391](https://bitbucket.org/projects/test/repos/my-project/commits/5a03391b28ad56762744403ce454288f558e1a7d))

## 0.0.23 (2024-03-05)

- feat: add settings button, remove flowbite ([931348e](https://bitbucket.org/projects/test/repos/my-project/commits/931348ec4514426d7fef0d902b9366fa7346f8f6))

## 0.0.22 (2024-03-05)

- fix: fixing social url ([1a33173](https://bitbucket.org/projects/test/repos/my-project/commits/1a33173f13ab57e4676974455c62187a03f9a844))
- fix: of course the vercel_url env param doesn't have a protocol... ([aff2d15](https://bitbucket.org/projects/test/repos/my-project/commits/aff2d15c4c8af4eb487e154c43469651e9e86c95))
- fix: hard fix for metadata baseurl ([43eee55](https://bitbucket.org/projects/test/repos/my-project/commits/43eee5503e1fcd0bd1b51d19540a4448b40b7a0a))
- chore: add new issue to known_issues ([752d420](https://bitbucket.org/projects/test/repos/my-project/commits/752d42081a7afec261cc8efa7325d2fae16b95bd))
- fix: typos in prompt ([3bd3725](https://bitbucket.org/projects/test/repos/my-project/commits/3bd372554a5e685aee3f8097942774b906223c30))
- feat: download transcript button ([0c8f78d](https://bitbucket.org/projects/test/repos/my-project/commits/0c8f78d7f329d3c7dd73bd79e038c9d6114a2138))

## 0.0.21 (2024-03-04)

- fix: fixing bits ([2631a9e](https://bitbucket.org/projects/test/repos/my-project/commits/2631a9e7cf3a56e75b41bbfa84ec637946672b10))

## 0.0.20 (2024-03-04)

- fix: use black bg behind black bg image ([c769d8b](https://bitbucket.org/projects/test/repos/my-project/commits/c769d8b7b3b7e87adb60c03d047e45b739bb4380))

## 0.0.19 (2024-03-04)

- feat: text tweaks ([ebba538](https://bitbucket.org/projects/test/repos/my-project/commits/ebba538141813dd68a7ccb31b3d4d7116511e2ec))

## 0.0.18 (2024-03-04)

- feat: mobile ux tweaks ([95f5fd2](https://bitbucket.org/projects/test/repos/my-project/commits/95f5fd2ac7c501f69c0572dc978fcbf86e5f4d06))

## 0.0.17 (2024-03-04)

- feat: TTS/LLM latency visible ([d4d0b24](https://bitbucket.org/projects/test/repos/my-project/commits/d4d0b246971168c34a8e38a9dcd9a787606ae2d2))
- feat: add bolt icon to metadata ([1fe299c](https://bitbucket.org/projects/test/repos/my-project/commits/1fe299cd76aa7193e666d6c0e1f067fc7cf6a49d))
- feat: changing stuff ([d6cfa05](https://bitbucket.org/projects/test/repos/my-project/commits/d6cfa05db4c45359b0cfe896be609c2fc2f9a78f))
- feat: endpoint tuning ([d2a11bf](https://bitbucket.org/projects/test/repos/my-project/commits/d2a11bf59d51ae6ba372779d448e0edd3c82ce4b))
- feat: metadata, share icons ([9751355](https://bitbucket.org/projects/test/repos/my-project/commits/97513555df3786bef285a9edfea34e6cfd710a01))
- feat: contextual greeting ([82a6462](https://bitbucket.org/projects/test/repos/my-project/commits/82a64627e2f09d2c5eab15b14cbfcdf8f14323c3))

## 0.0.16 (2024-03-04)

- chore: move exclamation icon tsx file to icons folder ([a92efe0](https://bitbucket.org/projects/test/repos/my-project/commits/a92efe0101e801bd4a0fcda2971ba4d070f4ea55))
- fix: nudge logo up 1px ([4036c88](https://bitbucket.org/projects/test/repos/my-project/commits/4036c88e1f998951e7bbcb3a987e3e5e4971b48d))
- fix: tweak logo positioning and font ([d5b55f0](https://bitbucket.org/projects/test/repos/my-project/commits/d5b55f02083a5bdcb913dc4d120e6bd6c032fbc8))
- fix: tweaking welcome message contrast ([d200106](https://bitbucket.org/projects/test/repos/my-project/commits/d200106460d473ac33e204ff89b3c8a0846b4e43))
- feat: add message metadata to it's own context ([8c7eba7](https://bitbucket.org/projects/test/repos/my-project/commits/8c7eba7a1a1fc9f6ec447feb0b0af10f00b856b7))

## 0.0.15 (2024-03-04)

- feat: some layout changes, fullstory added ([eb7bf3b](https://bitbucket.org/projects/test/repos/my-project/commits/eb7bf3bf686b402dac7a9a6fa2558400ef2c292a))
- feat: tweaking latency display ([3a12535](https://bitbucket.org/projects/test/repos/my-project/commits/3a12535c038e3b6a3e95cc0a9a9e30ab18c8ce50))
- feat: chat bubble latency ([73153ea](https://bitbucket.org/projects/test/repos/my-project/commits/73153ea154662e4ad2145a1fe2b658d392359246))

## 0.0.14 (2024-03-04)

- chore: smol tweaks ([2993a98](https://bitbucket.org/projects/test/repos/my-project/commits/2993a98902dd45dfb13ad57cc7393e21dab6f897))
- chore: add link to known issues ([bff88a1](https://bitbucket.org/projects/test/repos/my-project/commits/bff88a19acf028a7d81d5308da896629b26d9291))
- feat: flesh out dynamic greetings ([0ef489b](https://bitbucket.org/projects/test/repos/my-project/commits/0ef489b6398f084f10d9e5e6e6b345b32d60c170))
- feat: use TTS for welcome message ([c74f4f6](https://bitbucket.org/projects/test/repos/my-project/commits/c74f4f65af61c9c78915552a47a960933f8fdedd))

## 0.0.13 (2024-03-04)

- fix: use deepgram favicon on demo ([dc48e2c](https://bitbucket.org/projects/test/repos/my-project/commits/dc48e2c07528c43f06c4ea00c6f8c143b6f98a21))
- chore: add opengraph/metadata to known issues ([db73eef](https://bitbucket.org/projects/test/repos/my-project/commits/db73eefcb5540ff86491a292dddc36032b445c4a))
- chore: add roleplay prompt injection protection to the known issue list ([6a36785](https://bitbucket.org/projects/test/repos/my-project/commits/6a367855f5d6d19bc3d5fc399a85620d8e6e70b8))
- chore: update known issues file for issues links ([be9ff46](https://bitbucket.org/projects/test/repos/my-project/commits/be9ff46e5f2c95e4e17a1ffed4901869627c131e))
- chore: readme update and community files (#13) ([629cd2f](https://bitbucket.org/projects/test/repos/my-project/commits/629cd2f8316e9eb0256e919c3395263cfbb166e3))
- chore: update known issues ([d246613](https://bitbucket.org/projects/test/repos/my-project/commits/d24661341fbddee43889d1441c15ae4c14668d35))
- Delay after unmuting the microphone for a second time (#16) ([6b54ce3](https://bitbucket.org/projects/test/repos/my-project/commits/6b54ce3b8073d6b7ee6ee0b898951503b9e8060a))

## 0.0.12 (2024-02-29)

- feat: add iOS disabled audio playback notice on launchpage ([8da9351](https://bitbucket.org/projects/test/repos/my-project/commits/8da93513febe891003ec9b69d16bc598cbc4cbba))
- chore: add favicon issue to known issues ([a11c9c3](https://bitbucket.org/projects/test/repos/my-project/commits/a11c9c390cad6bd9b03e7de2ff0f679b241a15df))
- chore: add headphone icon to known issues ([0658872](https://bitbucket.org/projects/test/repos/my-project/commits/06588725b381ed49cc21d2bf38bca6c4dabd1371))
- fix: switch headphone icon to SVG ([569ef92](https://bitbucket.org/projects/test/repos/my-project/commits/569ef92494ba66b87496ec597612327e899a4cb7))
- chore: add need for mobile ux tweaks to known issues ([cf1a86e](https://bitbucket.org/projects/test/repos/my-project/commits/cf1a86e23f65a72f8a51ee77245259ea18efdaf8))

## 0.0.11 (2024-02-29)

- feat: avoid one word answers in the prompt ([85ae601](https://bitbucket.org/projects/test/repos/my-project/commits/85ae60102f7d431e62a70a2cae002d4d713d38de))
- feat: update sample environment variable ([c3f0ee0](https://bitbucket.org/projects/test/repos/my-project/commits/c3f0ee00aea7577dea0cafcdadb6f8b315a470b6))
- feat: fix disappearing button on mobile launchpage ([4e946fc](https://bitbucket.org/projects/test/repos/my-project/commits/4e946fcf3592c954bcd56677a7b3b84a8c2b3acc))
- chore: update KNOWN_ISSUES.md with more thoughts ([0aa9136](https://bitbucket.org/projects/test/repos/my-project/commits/0aa91362fbfac85e4fc8f9393b3fc2966e103406))

## 0.0.10 (2024-02-29)

- feat: unedge the TTS api route ([b905161](https://bitbucket.org/projects/test/repos/my-project/commits/b905161773dd3dfd5b4291d7b5540d567e4dbe82))

## 0.0.9 (2024-02-29)

- feat: change colour of message metadata line ([4a2ac6c](https://bitbucket.org/projects/test/repos/my-project/commits/4a2ac6cac3a80d970c15378edacb67c9f0a75446))
- feat: avatar tweaks, barge-in works, update prompt ([c426341](https://bitbucket.org/projects/test/repos/my-project/commits/c426341a2edb41507b2b8f76f7ccf552f0106992))
- feat: switching over to production values ([5a3ea5b](https://bitbucket.org/projects/test/repos/my-project/commits/5a3ea5b5d63106cfce7c6eea191cc06006504ae3))
- feat: update user avatar ([af324e4](https://bitbucket.org/projects/test/repos/my-project/commits/af324e4acd0738ad8bc7e1e11634537613112c1c))
- feat: add CTA buttons in the header ([6205b35](https://bitbucket.org/projects/test/repos/my-project/commits/6205b352304dca1de70aed2b9b8155e349298490))
- feat: add headphones message ([8427a42](https://bitbucket.org/projects/test/repos/my-project/commits/8427a426ad09ce4445fd1d8ecb79010b4a06187d))
- feat: better loading/connecting messages ([9b4e011](https://bitbucket.org/projects/test/repos/my-project/commits/9b4e0117bc896ceb6711a0e47c10d3e967d0d577))
- feat: ux tweaks, better messages, styling ([a9d7117](https://bitbucket.org/projects/test/repos/my-project/commits/a9d711790b50201c21d4b4732ff88a5c76684173))
- feat: add GTM for analytics ([92734c4](https://bitbucket.org/projects/test/repos/my-project/commits/92734c4b56c134deca1de5ee2a012b9879b84ca9))
- feat: add heap analytics ([913049f](https://bitbucket.org/projects/test/repos/my-project/commits/913049f112af66dc093178e07ae4b8fd71ca6dcf))
- feat: switch to console heap project ([1741b70](https://bitbucket.org/projects/test/repos/my-project/commits/1741b70eb140ef176d82341ebe8b2678a19257c3))
- feat: tweak splash screen for readability ([36155aa](https://bitbucket.org/projects/test/repos/my-project/commits/36155aa9eb0349187e46a87392bbcd71dbe23527))
- feat: tweak splash screen for UX ([b6e3fc0](https://bitbucket.org/projects/test/repos/my-project/commits/b6e3fc007bea761c02d2f0f663c984a79baf5c5d))

## 0.0.8 (2024-02-29)

- feat: remove local VAD attempts ([47815ca](https://bitbucket.org/projects/test/repos/my-project/commits/47815ca4ac0bbf87188fef7dfcd959e5d05229ff))

## 0.0.7 (2024-02-29)

- feat: working audio queue and server-side latency ([0f8937f](https://bitbucket.org/projects/test/repos/my-project/commits/0f8937f52bd3a8349f03a2347804c0c8f8022b95))
- feat: major rebuild of nowplaying and audio queue to use contexts ([f41498d](https://bitbucket.org/projects/test/repos/my-project/commits/f41498dc69d1bc22501300bc86acf50d2e28692f))
- feat: disable audio control button ([bddade1](https://bitbucket.org/projects/test/repos/my-project/commits/bddade19752fcc3323a4bdb7d057aa04fdb684bf))
- chore: removed debug outline ([cdf6270](https://bitbucket.org/projects/test/repos/my-project/commits/cdf62703ae2f277f753860c4653735bf41fb2216))
- feat: TTS latency display included ([9e74cb0](https://bitbucket.org/projects/test/repos/my-project/commits/9e74cb0d36c1bdeba6c88f8675dd20786b2b1e4f))
- feat: audio controls plugged in ([f71dc32](https://bitbucket.org/projects/test/repos/my-project/commits/f71dc320bc0ffba9f51a8f4ef6fdac4ed37c199c))

## 0.0.6 (2024-02-28)

- feat: add welcome message to audio queue ([fe3c608](https://bitbucket.org/projects/test/repos/my-project/commits/fe3c60838bbe7ec22f1d31370f4c0505223eeba2))
- chore: remove some logging ([73442a1](https://bitbucket.org/projects/test/repos/my-project/commits/73442a111493688e0815a7f26e9c0796954eb2ce))
- feat: tweak design and audio controls ([a47c14c](https://bitbucket.org/projects/test/repos/my-project/commits/a47c14c80a60d30c94ef3e13684e1bddc389fb62))

## 0.0.5 (2024-02-28)

- feat: minor tweaks ([a99eb42](https://bitbucket.org/projects/test/repos/my-project/commits/a99eb42b3deb9c630d38109954c592d6f3a849ed))
- feat: requeue messages ([3b04f46](https://bitbucket.org/projects/test/repos/my-project/commits/3b04f46c1c99950e4b00739b955eac21bbbb2d12))
- feat: plug LLM response back into TTS ([d9fbbdd](https://bitbucket.org/projects/test/repos/my-project/commits/d9fbbddc2ef16a6ad76deb2f22905e6dc4a21dcf))
- feat: audio plays from queue ([9993720](https://bitbucket.org/projects/test/repos/my-project/commits/99937205ed113ae87cee632fed53c6aaf25e38a6))

## 0.0.4 (2024-02-21)

- feat: playback TTS response in the browser ([e42f551](https://bitbucket.org/projects/test/repos/my-project/commits/e42f551d801737fe80e4330481e428ca25782776))
- feat: support streaming response from TTS server ([eb8c97a](https://bitbucket.org/projects/test/repos/my-project/commits/eb8c97a271d9c8f0e48eb5b4afad1c6aef80948d))
- feat: moving TTS playback control button ([2d65cf7](https://bitbucket.org/projects/test/repos/my-project/commits/2d65cf7d769250d0e81e087a1efc07a3f2a32ebf))
- feat: add unsent text queue - queue all the things ([71add80](https://bitbucket.org/projects/test/repos/my-project/commits/71add808ff84186447bca5d4942118d087819ad6))

## 0.0.3 (2024-02-16)

- feat: overhaul controls ([e8436c8](https://bitbucket.org/projects/test/repos/my-project/commits/e8436c8af56fd0bcf0d9b1ae17963668a8a9e94e))
- fix: fixing stuff ([b4e1853](https://bitbucket.org/projects/test/repos/my-project/commits/b4e18530041f8ea1d2cedff11511d6da3569ae5e))
- feat: remove guard ([aae419d](https://bitbucket.org/projects/test/repos/my-project/commits/aae419d27505b8498c8c1f651f4a7f008959d11a))
- chore: use component aliases ([ab5fa9b](https://bitbucket.org/projects/test/repos/my-project/commits/ab5fa9b6ea4930cf4fa83a43eecedae752178325))
- feat: remove edge from core page ([6c2e221](https://bitbucket.org/projects/test/repos/my-project/commits/6c2e2214f09a373ebf79af1727a900e24408b497))
- feat: edge build ([7684598](https://bitbucket.org/projects/test/repos/my-project/commits/7684598daaa04de523230066c4b78f26685c3d88))
- fix: renaming component cases ([9e0e112](https://bitbucket.org/projects/test/repos/my-project/commits/9e0e112f1a8c9afdbaa0139bd27c6112e6f72f7d))
- fix: fix casing problems ([00ef060](https://bitbucket.org/projects/test/repos/my-project/commits/00ef060ae672377b95d63d42f2425f9d5f845d09))

## 0.0.2 (2024-02-16)

- chore: llm initial setup ([7d23b1a](https://bitbucket.org/projects/test/repos/my-project/commits/7d23b1a862178482f86a3fe634658ba7d5872b3a))
- feat: llm integrated into chatbot ([ce13e56](https://bitbucket.org/projects/test/repos/my-project/commits/ce13e564d872d642f797d19636b77cf246a28f56))
- fix: fix callback deps ([f28bde8](https://bitbucket.org/projects/test/repos/my-project/commits/f28bde83793f4b44d7174e5c6d5e4a1803a02aeb))
- fix: update deepgram transcription options ([b620eaf](https://bitbucket.org/projects/test/repos/my-project/commits/b620eaff635277691f92f9cca2137766d8228e36))
- fix: fix background on mobile ([10e5901](https://bitbucket.org/projects/test/repos/my-project/commits/10e59013ded39eb1a7edaeb468a0658f9b112b39))

## 0.0.1 (2024-02-11)

- feat: adding greeting, initial state, key events ([c8308d3](https://bitbucket.org/projects/test/repos/my-project/commits/c8308d343f4f5a2db182206d1db7f64544c8b005))
- feat: add text entry for conversation (but only when mic is disabled) ([e68833c](https://bitbucket.org/projects/test/repos/my-project/commits/e68833cbbe27c250dd8d3854e13aea2bc12b0795))
- feat: tidy up before next big bit ([d67e2b2](https://bitbucket.org/projects/test/repos/my-project/commits/d67e2b2e1c0953991b87c7d422a92cd1af8ef798))
- feat: better volume interaction ([d80849a](https://bitbucket.org/projects/test/repos/my-project/commits/d80849a0f892607fabb1195b8164c58b7c1275cf))
- chore: pre-LLM request improvements ([8f48453](https://bitbucket.org/projects/test/repos/my-project/commits/8f4845359cce717db167789ace599f509ee06652))
- feat: window scrolls to bottom smoothly as messages come in ([217b32e](https://bitbucket.org/projects/test/repos/my-project/commits/217b32e6c87af4b41e9d922f9b21cd8e2ed9b298))
- feat: introduce client-side VAD ([8e16fe5](https://bitbucket.org/projects/test/repos/my-project/commits/8e16fe5e49f360ceab880c8c1cf76633256f9d9e))
- feat: simplify vad events ([2b78439](https://bitbucket.org/projects/test/repos/my-project/commits/2b7843956de43dae3a4f6268f999b42c9916366e))
- chore: transient changes ([9bf74be](https://bitbucket.org/projects/test/repos/my-project/commits/9bf74be35b616e3e1bddcda454c869c4fedf031a))
- chore: tidy up ([02f0772](https://bitbucket.org/projects/test/repos/my-project/commits/02f0772acdfeed1e1583f209e0becd17baed7619))
