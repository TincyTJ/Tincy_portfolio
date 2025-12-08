'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "69b54d372643cf39d59db8e94c518312",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "912f587b5957955652ca905701f048eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7e0cb6dbc535f0c92b3bd307b5c41e79",
".git/logs/refs/heads/main": "1897444a5af8cd96b38902e590199e79",
".git/logs/refs/remotes/origin/main": "02adcfa3a5fa65a969589e17c791c02f",
".git/objects/03/d2063b54c41410d5d7451d31765247a354d815": "b29698ac00cd964240f499dd519c0b3b",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0a/212da7828ced7ea15cb7a1dbd41207bdf6f5d8": "53ddb52acf650ba40357fae98f4756ff",
".git/objects/0d/b0d77c9c8e3419b67e51c4ccfa57968b86733f": "7644ff3bae52330d9740c4624a8b0993",
".git/objects/13/42a34827314c47cdb1718e10398534932d9dac": "50ed02c30beb83e6eb26ef374181e9e7",
".git/objects/1a/7decb1787860b69ddf902a995aa99efa4cf601": "7898c00899f72d30e8a20547c3e5e6c9",
".git/objects/1c/6819ee51cfaa943216025447f5e2b0fa91d74c": "57abfe9e6f9ff0ad807af609505d1547",
".git/objects/27/87a65cc0f1c233aa7bcc4fd54df4a21aa1c567": "5f04fd08efb4a13c3de3e9e233f37016",
".git/objects/2a/f84a40f797d781b452f7251ec88bc1edd9d5f3": "3a9891f1625a8b693d5c3146b160624d",
".git/objects/2f/b9c0f2670a2a1ee704acf1de7c0c370fbdd2ca": "5490ef7c491f5b92fdd0073b28adde5b",
".git/objects/34/13ab476afd890c75852dd8bfdc0e2528694719": "47057ee06134ece00cd06c0ca3bbfe92",
".git/objects/34/503bdd9caf3cd15d5b31e1ed8c1ef01c55b372": "69313765cd9918fab1918c9ec61a1f49",
".git/objects/34/f363adb04985c3a533e30a193d49c6982bd739": "ddc13ce9d5559cae759c037dd05f9933",
".git/objects/36/8e1843a91cf7c021f209db797913d3ffb78ae7": "77eaf0d61906ffe81ec42d277356ae0e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/bc6493743c950b74b38a8b356eea85edb66004": "4bfb7599df814f1979e33640f65b19d3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/f64fae0a06f02bd789548d90454e4d787e2dcb": "2ec81d5d7d5dcf0696a9d687a455d7d6",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/87b9fc0933dd3727f6b0091a710ecbe319b92a": "a065d64158759bbb399cdf691ef2be11",
".git/objects/59/f3f63d6e6382c951b6e60f50515e5a23833450": "ed5716e68f43b2e60a898d9035f16b0a",
".git/objects/5a/4e1d956df1e26b6a833713f4f2f6b7334d1178": "272cf143301e2e31fa48138f48317225",
".git/objects/5a/b1075bbbb49c658fef741b600eecc28c0eea5a": "01cd0e0ab5e38f9049e8466ea3962d35",
".git/objects/5c/e4f8a9e5a811251733db92640096f8f48ba616": "2d27e60b72767e46dd239718a59d1312",
".git/objects/64/bea3168826a4ad1cea06d5892ed885370a6bce": "b58e64734b6ec8edeccab3b871a89b0b",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/449e8f5f5fc1d7b26c9bcb39098cf9e6b1f45c": "308a6742f3ffeb4d59b9137525e3b5af",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7b/0d0f8ae9b6e74b4995ae90e5b16305dfe7dcae": "631ea42fc421d965093b52d811d45ee6",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/c36e97b59935550253d4628485369821ab4ef0": "9e3a525ff32359d3e5a23c1dbc1ff30a",
".git/objects/7d/eab7c39f3a5e545099dc016140f46de87127e7": "9a8d3fad7380e8607f0a1a00dd96f4ce",
".git/objects/7f/fa91cc19e830d89816f31e25e9d74b9d3d3ddd": "6df590aadd997f3a1e2c938e99997246",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c275ea245864c4079fa174007e2aa33d1a7ec5": "be01a2d8571a5cd1ec03d9eadb1c6b66",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/dbb66ab2d5696e88c0762dcd0f0069489eb864": "9d69926d946c7a4092a30ac670fd1b9b",
".git/objects/90/8dbd98a79d3fc04018072f308fb6c1469fc080": "f72626e90e13b18b76524583a7fb83c7",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/4835043ababbe751f47c0a2f5b294d54a5cd29": "4b32e810b1fed1f789746ccb3c14d2ce",
".git/objects/96/71e98e4e1c90df85b80d1ab5cebc665fda0568": "8cbbb4794a6c63724e58e122a9cd7d74",
".git/objects/9c/6f3c544150a1cbf8c63821ed77ea2153cd6f7b": "36c3ad378ef5083b13602476eee01274",
".git/objects/a0/5580a68ccac3b7fc76c6947fb6d80582d8f15c": "cdaa6169cdb425c575ccf95a8a7efde3",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/a4c34e452970774d085947a579071193617062": "7c1430db052e7e4186f0d38987c5cf14",
".git/objects/a9/28e74e8b3e85af375995fed3efbb44ac5126ca": "45a437e92a9ceb7c47ce3d804fed2ea3",
".git/objects/aa/ee8be0299b6dc721d76c27d8b8d71b81774619": "5d596a51f713f379c057fb1a5c40fa22",
".git/objects/ac/56eca9431f4f538c27a5e8c12b3b6041554caa": "421166acff93442d84b2e7284d99843e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/71ff5e2cfdae8259e27397cfd2b351621f68c0": "94308ba0a40eb420070deecebcbd64ec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/40c8ed323bf4ec52bb8a4a27a49c00d7ad3f78": "583ec0ea3e6d192abf7d009fd369294b",
".git/objects/b8/838b406d1e4300ccfc13a5b39cd5cb7392c7ab": "bd77c6d4536495737b3f4708665eaddc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/d7071fbb7f416c20f4ecff2a0fa830f7fc5db3": "a6c56eeb2600162bfacc11a9265aa809",
".git/objects/ba/9c29b9dae8a40cc8d1b8196fc79f255bb28fa9": "739910bc9ba011922d51026aaf8f4e8f",
".git/objects/bd/7eb0bff7074c5dfc0d05de0af16560cc2c6c9a": "ca4c39604e94e70aeb09bcf63d44c1fe",
".git/objects/bd/f610c91c19155537f6227ecd758aea16840174": "5e508cf1cc3e00ab013141ff8cf2cb39",
".git/objects/c5/bd21bdd639d93b9eee40c64288502deb84c456": "522e720b6da489f1693498442f8a88f0",
".git/objects/c6/c85612420cd044a5c862f96dcc28a2f6a992ab": "25f664cbcdf798145ca1823321190d79",
".git/objects/c7/a7e5eeb8293214a352ba5e64956c5728bef79a": "e0bec11a58b76979fe40943f284535ec",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4dd50ece196458b167ce2a135cae1e4435a795": "86335c3bf9f22a4ca4ffe9e80a1a3d17",
".git/objects/ed/5d0871c2416ddf36cd84ba970cc872f63bbc18": "260a1c7c40a5b896f8d70d83054782e4",
".git/objects/ed/ddbc3716e94339411d3530e397bb30ccfc034b": "ce13f4507f7f3881d16a94c9fcee34f8",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f4/289a8b1498c8a21bf12ab9c98563021482fac2": "f6c36b8c3c29b6c483918f4f0968e0a4",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f9/1bc5a4e963fea632228c5e6eb97441ee3f919a": "67f459bb47ad1cee4d9064dcae56022e",
".git/objects/f9/ffc59e1234f3d6f3376a9a04647bada801594d": "e155e552938417d6f266779e4cf6891d",
".git/objects/fa/8d092710eac0fb1268207da67685347cfde6d6": "74095220b849fd09f8e4db1c08480bd1",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/1b8a558ad955e8a911d450a17e8a5505797591": "d8fe70a0e353cbacf91b9a7643956d69",
".git/refs/heads/main": "a10d913c019d0fdde7e4c76048aee25a",
".git/refs/remotes/origin/main": "a10d913c019d0fdde7e4c76048aee25a",
"assets/AssetManifest.bin": "a388ea9345d3f2d5eec60c537803c0d5",
"assets/AssetManifest.bin.json": "7f24b8673270e420e6768c3f0c86e02e",
"assets/assets/gif/about.gif": "85addadc6534f98c56772c75a59d4f65",
"assets/assets/images/face.png": "f5f30f4c63d3b63962789816ce0e4256",
"assets/assets/images/githb.png": "a1311a6c3e48b23f498dbd512d72fcf3",
"assets/assets/images/linked.png": "16e49087ae6a1637e762c7d63b2b11dd",
"assets/assets/images/mypicture.jpeg": "d4112fbd2fd0670cf282b9bbe9d4bcee",
"assets/assets/images/projects/dolyst_splash.png": "e06830c81c37dec6dc4bd4eaf381ab69",
"assets/assets/images/projects/expense/ex_add.jpeg": "8ed353d3932c85d70b30763f45b8881f",
"assets/assets/images/projects/expense/ex_bill.jpeg": "a8b23ca8b962090336ed6a9e1e9e1246",
"assets/assets/images/projects/expense/ex_card.jpeg": "9a49f3545de89b45f993018f2351b38c",
"assets/assets/images/projects/expense/ex_exreceipt.jpeg": "30b1b5fb87971b3a25a73a8e4f5a1b5a",
"assets/assets/images/projects/expense/ex_home.jpeg": "e6b265cb78f89d789f441f99493db5d7",
"assets/assets/images/projects/expense/ex_inreceipt.jpeg": "2dd4190a6f113fe527e77b9c9d77bb7d",
"assets/assets/images/projects/expense/ex_profile.jpeg": "58387bba3cf71a6daad84a63ab0364a4",
"assets/assets/images/projects/expense/ex_splash.jpeg": "b979b1436f3394ac7c228ce902a86cda",
"assets/assets/images/projects/expense/ex_wallet.jpeg": "a1a862bbba47b8c39f26bb74bf489606",
"assets/assets/images/projects/mygmail/accounts.jpeg": "e9355fb0c69c0783cf77a0cc32ec4d87",
"assets/assets/images/projects/mygmail/compose.jpeg": "36951b962a8ffcdf58cd79345d143dc2",
"assets/assets/images/projects/mygmail/home.jpeg": "4a7751981327c8a76fb636a59b01435c",
"assets/assets/images/projects/mygmail/inner.jpeg": "e7cd926020101fe31ed09af6fa48621d",
"assets/assets/images/projects/mygmail/join.jpeg": "7b169826435a7ffe4e5b73232520b6f6",
"assets/assets/images/projects/mygmail/spam.jpeg": "116d953d249a22a98a1b395422687b1e",
"assets/assets/images/projects/mygmail/splash.jpeg": "e6dad56f63145dc28e340a001531c6a1",
"assets/assets/images/projects/mygmail/starred.jpeg": "ad8e76e4f3afaf5ec7a609559770800f",
"assets/assets/images/projects/onesplash.png": "f13c64519464ebf71be26af0b94bd914",
"assets/assets/images/skills/api.png": "76ea082ff3a1bed6dc1035ae65e90636",
"assets/assets/images/skills/dart.png": "d0c3fde4a21fdbd0a11bfa100db161a3",
"assets/assets/images/skills/flutter.png": "e1dacf68c8e19e3d28ae7f678e75e7cc",
"assets/assets/images/skills/localstorage.png": "2e0909034ee42ab0cd795efddc692494",
"assets/assets/images/skills/provider.png": "b85835b61de2f504bfdffc56193ef571",
"assets/assets/images/skills/uiux.png": "7fb5181853015e225402572cc6730ef1",
"assets/assets/json/contact.json": "c1fd48a7b019e11dbe64021cbaca61b8",
"assets/assets/json/skill.json": "84ff434a3cd69938d299b83fc2f5b11c",
"assets/assets/json/Technology.json": "130d91d7ea701a49cbba0cc6246d616e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "23080f8c335278ea695fac38d8d63237",
"assets/NOTICES": "9c6500513be03a2376fdeaa2f1c0d4b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "df3004740b677d18dd77e3b348d40aa3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec6f11c3ae3a4aea9cfe03bd902e3598",
"/": "ec6f11c3ae3a4aea9cfe03bd902e3598",
"main.dart.js": "f657e8d973e9d5231d86dff80297839d",
"manifest.json": "7ed5f0ac68ee29fee285da7269058638",
"version.json": "c6a6a976d8eb6c5eb2366ac5efb9b441"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
