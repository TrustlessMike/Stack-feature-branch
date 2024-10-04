if (!self.define) {
  let e,
    s = {};
  const c = (c, i) => (
    (c = new URL(c + '.js', i).href),
    s[c] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = c), (e.onload = s), document.head.appendChild(e);
        } else (e = c), importScripts(c), s();
      }).then(() => {
        let e = s[c];
        if (!e) throw new Error(`Module ${c} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const o =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[o]) return;
    let r = {};
    const n = (e) => c(e, o),
      d = { module: { uri: o }, exports: r, require: n };
    s[o] = Promise.all(i.map((e) => d[e] || n(e))).then((e) => (a(...e), r));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: '46aeccfb35587cd8b3bcf32f28925e71',
        },
        {
          url: '/_next/static/chunks/23-160283681a7f96de.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/846-dcda72ca9585ff2a.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-8022c94d4a8b5013.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/app/dashboard/page-01fac11a4eaa1e8e.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/app/layout-40afbeb47dd44f58.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/app/page-5159c26288a34afa.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/fd9d1056-51face16839d2cb0.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/main-4d9dd7c97f814960.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/main-app-03675d926b7b8815.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-e18a555a9f910982.js',
          revision: 'd-qCgyBvxuywo4GRqyPT_',
        },
        {
          url: '/_next/static/css/b14ab7500244bb55.css',
          revision: 'b14ab7500244bb55',
        },
        {
          url: '/_next/static/d-qCgyBvxuywo4GRqyPT_/_buildManifest.js',
          revision: '2ec694eb52ae4f523f265a46bae4d768',
        },
        {
          url: '/_next/static/d-qCgyBvxuywo4GRqyPT_/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/media/26a46d62cd723877-s.woff2',
          revision: 'befd9c0fdfa3d8a645d5f95717ed6420',
        },
        {
          url: '/_next/static/media/55c55f0601d81cf3-s.woff2',
          revision: '43828e14271c77b87e3ed582dbff9f74',
        },
        {
          url: '/_next/static/media/581909926a08bbc8-s.woff2',
          revision: 'f0b86e7c24f455280b8df606b89af891',
        },
        {
          url: '/_next/static/media/6d93bde91c0c2823-s.woff2',
          revision: '621a07228c8ccbfd647918f1021b4868',
        },
        {
          url: '/_next/static/media/97e0cb1ae144a2a9-s.woff2',
          revision: 'e360c61c5bd8d90639fd4503c829c2dc',
        },
        {
          url: '/_next/static/media/a34f9d1faa5f3315-s.p.woff2',
          revision: 'd4fe31e6a2aebc06b8d6e558c9141119',
        },
        {
          url: '/_next/static/media/df0a9ae256c0569c-s.woff2',
          revision: 'd54db44de5ccb18886ece2fda72bdfe0',
        },
        {
          url: '/images/crypto-icons/$pac.svg',
          revision: 'c830fed49505e6976896d85af9c86d84',
        },
        {
          url: '/images/crypto-icons/0xbtc.svg',
          revision: 'ca90430d994350506fe700ef44b607ab',
        },
        {
          url: '/images/crypto-icons/1inch.svg',
          revision: '1c4cae5fd9d7dd90ac2ed88f6c0042ec',
        },
        {
          url: '/images/crypto-icons/2give.svg',
          revision: '9f370dcf72d32269ac2f0d4fc5320dff',
        },
        {
          url: '/images/crypto-icons/aave.svg',
          revision: '900c8d1b569543c4a8ef68ce172d81d3',
        },
        {
          url: '/images/crypto-icons/abt.svg',
          revision: '90a0e76a69fa5f8e1ee744d6efd479ee',
        },
        {
          url: '/images/crypto-icons/act.svg',
          revision: '2a9387dea92218f167812b7b1be821da',
        },
        {
          url: '/images/crypto-icons/actn.svg',
          revision: 'f9cc3bc48dbae085ec779c850598d471',
        },
        {
          url: '/images/crypto-icons/ada.svg',
          revision: 'a429378d9e8284334b85f3d77382503a',
        },
        {
          url: '/images/crypto-icons/add.svg',
          revision: '7ab8a63d079a607535e7857a1ca85edf',
        },
        {
          url: '/images/crypto-icons/adx.svg',
          revision: '06347dde57b899dfbb62bfc3d7809556',
        },
        {
          url: '/images/crypto-icons/ae.svg',
          revision: '43e2ab1b9cecbe089869f8c838dad18c',
        },
        {
          url: '/images/crypto-icons/aeon.svg',
          revision: 'f6145689338709b83ae95071b10096aa',
        },
        {
          url: '/images/crypto-icons/aeur.svg',
          revision: '1e7c1382b0e55d560bb0471b8633213f',
        },
        {
          url: '/images/crypto-icons/agi.svg',
          revision: '76ae3140d65aff3944bab2caeea701df',
        },
        {
          url: '/images/crypto-icons/agrs.svg',
          revision: '5a283d9781ee5bc6353854f504d13ae0',
        },
        {
          url: '/images/crypto-icons/aion.svg',
          revision: 'a52514a320a2c0f2675faf4302fcf341',
        },
        {
          url: '/images/crypto-icons/algo.svg',
          revision: '19b0bb020c8abe95493d21949c736209',
        },
        {
          url: '/images/crypto-icons/amb.svg',
          revision: '59c23689e3f3310e1b17d30ce9dcede2',
        },
        {
          url: '/images/crypto-icons/amp.svg',
          revision: 'e6e3be95863baadb3ac3c658d22aec6e',
        },
        {
          url: '/images/crypto-icons/ampl.svg',
          revision: '8863e886659b19ba816ae89950e3a6da',
        },
        {
          url: '/images/crypto-icons/ankr.svg',
          revision: 'bb97292d1acf8ee2c191d735aa5cfa65',
        },
        {
          url: '/images/crypto-icons/ant.svg',
          revision: '811395a1f8d3755e158885b47143b545',
        },
        {
          url: '/images/crypto-icons/ape.svg',
          revision: '571333d9f0bdc1397407af0d3154e8d3',
        },
        {
          url: '/images/crypto-icons/apex.svg',
          revision: 'f7edba444fc9b173f4a3f26e614b8da4',
        },
        {
          url: '/images/crypto-icons/appc.svg',
          revision: '4e364bc3b3c7265a40f92fbc3dd0156d',
        },
        {
          url: '/images/crypto-icons/ardr.svg',
          revision: '2607f8f6abb835cc919cfeb5d3cf41b4',
        },
        {
          url: '/images/crypto-icons/arg.svg',
          revision: '3c4838274be379f28dbb72b55210887f',
        },
        {
          url: '/images/crypto-icons/ark.svg',
          revision: '443086c09cb7b6fbe71615c813ce5727',
        },
        {
          url: '/images/crypto-icons/arn.svg',
          revision: '50eb11e8281c299569ddff2e1a5692df',
        },
        {
          url: '/images/crypto-icons/arnx.svg',
          revision: '236a878fc056cfb2d9abc1227ac9e47a',
        },
        {
          url: '/images/crypto-icons/ary.svg',
          revision: 'c9757b719ae6622d9c61bd4bf3ed4933',
        },
        {
          url: '/images/crypto-icons/ast.svg',
          revision: '780705747eb4cbda06c79e511eee973c',
        },
        {
          url: '/images/crypto-icons/atlas.svg',
          revision: '6c6cdcf23ac523f515a2622703c7a1d9',
        },
        {
          url: '/images/crypto-icons/atm.svg',
          revision: 'e1b3ab3b4cc51af13a8e64eea27553db',
        },
        {
          url: '/images/crypto-icons/atom.svg',
          revision: '01295875cc6d71aaba5e750b8ba2e266',
        },
        {
          url: '/images/crypto-icons/audr.svg',
          revision: '09f037c33d899858efcc60edbd3a5d7f',
        },
        {
          url: '/images/crypto-icons/aury.svg',
          revision: '02cba38ae0945d20cb7c8f4ece748993',
        },
        {
          url: '/images/crypto-icons/auto.svg',
          revision: '8ba3a1f507c85bbbfd9444b0dd357d80',
        },
        {
          url: '/images/crypto-icons/avax.svg',
          revision: 'b6866726a46aed0146734cc1fbb614c1',
        },
        {
          url: '/images/crypto-icons/aywa.svg',
          revision: '2cd912c45e869c5ed2695c51432acc72',
        },
        {
          url: '/images/crypto-icons/bab.svg',
          revision: '0b54622580264d47597dc37d818c817a',
        },
        {
          url: '/images/crypto-icons/bal.svg',
          revision: '60d3745701bcf58928497d88c9b71a67',
        },
        {
          url: '/images/crypto-icons/band.svg',
          revision: 'e177511520a6df412a86a2fd4bbed9bc',
        },
        {
          url: '/images/crypto-icons/bat.svg',
          revision: 'd29e0d7ec96a1fd0d2019a1a1ab13cff',
        },
        {
          url: '/images/crypto-icons/bay.svg',
          revision: '1c03574cead0e30c29251eb2cef5548f',
        },
        {
          url: '/images/crypto-icons/bcbc.svg',
          revision: '19d0b4382d99ebba04e181d8d64936d0',
        },
        {
          url: '/images/crypto-icons/bcc.svg',
          revision: '92f797f3d8899d69290638eb2a335ea4',
        },
        {
          url: '/images/crypto-icons/bcd.svg',
          revision: '51a879fa9733e771098b07fe6f51a6bd',
        },
        {
          url: '/images/crypto-icons/bch.svg',
          revision: '161df605d7a993af39470b8f2ff9247e',
        },
        {
          url: '/images/crypto-icons/bcio.svg',
          revision: '835d642f305dbff48558da1708ccf1f6',
        },
        {
          url: '/images/crypto-icons/bcn.svg',
          revision: '6de5d6ece9e6d86b9915908b9cc665c8',
        },
        {
          url: '/images/crypto-icons/bco.svg',
          revision: '1856d29fd96a61faad4fdb24ebced727',
        },
        {
          url: '/images/crypto-icons/bcpt.svg',
          revision: 'af11612c4524f564c3739ec210523126',
        },
        {
          url: '/images/crypto-icons/bdl.svg',
          revision: '1cf510ca85418b8c766e5f0e02cd67f0',
        },
        {
          url: '/images/crypto-icons/beam.svg',
          revision: 'bc93dd3073f31ef503a6518227a8be62',
        },
        {
          url: '/images/crypto-icons/bela.svg',
          revision: 'f77c5c6dca2157668f1b93e5eeedd672',
        },
        {
          url: '/images/crypto-icons/bix.svg',
          revision: '4758357916e96f090832a70d6b64c821',
        },
        {
          url: '/images/crypto-icons/blcn.svg',
          revision: '7e2b8a68a6a6c3d0cddb053cca883469',
        },
        {
          url: '/images/crypto-icons/blk.svg',
          revision: '4bbd6e611438b4a829998bebe1210a58',
        },
        {
          url: '/images/crypto-icons/block.svg',
          revision: 'ea1dd9f98a5abbf853cd5d1d325f0270',
        },
        {
          url: '/images/crypto-icons/blz.svg',
          revision: '0ddb45f01ec4afcb07280263e483f328',
        },
        {
          url: '/images/crypto-icons/bnb.svg',
          revision: '2626df36e7822f2ca4b9cef986fa3c12',
        },
        {
          url: '/images/crypto-icons/bnt.svg',
          revision: '88da5ba87dc729e2135c536ddaa7c7c1',
        },
        {
          url: '/images/crypto-icons/bnty.svg',
          revision: '20beb8004c1e61f0fc0fc37bc26ed4af',
        },
        {
          url: '/images/crypto-icons/booty.svg',
          revision: '325e3085ac24c6a5e7e1cb40eb0b929e',
        },
        {
          url: '/images/crypto-icons/bos.svg',
          revision: '18ae38dbd870da9d6aaaf1de8860e7d5',
        },
        {
          url: '/images/crypto-icons/bpt.svg',
          revision: '323ab46f53d0a6f131e37771969d9a1d',
        },
        {
          url: '/images/crypto-icons/bq.svg',
          revision: '6314b3cf2b7312c8380d8035f8ae8e97',
        },
        {
          url: '/images/crypto-icons/brd.svg',
          revision: '92fea245e4a70edff225d9d88152193d',
        },
        {
          url: '/images/crypto-icons/bsd.svg',
          revision: 'd35765237fa189da267ef73d4d5a3a3f',
        },
        {
          url: '/images/crypto-icons/bsv.svg',
          revision: '709dc32e06d4435ff6f770d20c579bfb',
        },
        {
          url: '/images/crypto-icons/btc.svg',
          revision: 'edae64fcb50f425e582a9a1429784b70',
        },
        {
          url: '/images/crypto-icons/btcd.svg',
          revision: '73be065a3c2b5bdb82104c08bbe76851',
        },
        {
          url: '/images/crypto-icons/btch.svg',
          revision: '7073b5e732da933e5c9e0a916926e650',
        },
        {
          url: '/images/crypto-icons/btcp.svg',
          revision: 'c94efc1f9012b6033791447eed24b301',
        },
        {
          url: '/images/crypto-icons/btcz.svg',
          revision: '378fe0fd604fc32c0fc15ba8599f21be',
        },
        {
          url: '/images/crypto-icons/btdx.svg',
          revision: 'a8988aa0f04b242aac54fe082db7964d',
        },
        {
          url: '/images/crypto-icons/btg.svg',
          revision: 'f4567f5cc33d3b5ce8b6f02c5ceab8b9',
        },
        {
          url: '/images/crypto-icons/btm.svg',
          revision: 'c9cc839d0062dbea228159933d3079ad',
        },
        {
          url: '/images/crypto-icons/bts.svg',
          revision: 'de56eb3ee626961ae4a09e10a10752ac',
        },
        {
          url: '/images/crypto-icons/btt.svg',
          revision: '1b7e97fb6a615837ea69f6b5ca3af820',
        },
        {
          url: '/images/crypto-icons/btx.svg',
          revision: 'c970685f063374282d48b00eb2a473d1',
        },
        {
          url: '/images/crypto-icons/burst.svg',
          revision: 'de0ab92de4e2c18bd74cbfb13c133c83',
        },
        {
          url: '/images/crypto-icons/bze.svg',
          revision: 'ae8e628a6c2ee40080af77e85a07c83a',
        },
        {
          url: '/images/crypto-icons/call.svg',
          revision: 'b2770066725c0996a16d067705df3b53',
        },
        {
          url: '/images/crypto-icons/cc.svg',
          revision: '314968ebc127b23f4433008f65560ed5',
        },
        {
          url: '/images/crypto-icons/cdn.svg',
          revision: 'd200c4997677d708fa2fe9dfb5fcc49f',
        },
        {
          url: '/images/crypto-icons/cdt.svg',
          revision: 'f65a6ba10674215ff36de7fbd3fab664',
        },
        {
          url: '/images/crypto-icons/cenz.svg',
          revision: '0a7901178e5520e4313768841bda01b2',
        },
        {
          url: '/images/crypto-icons/chain.svg',
          revision: '92d6540f5790b78f794f1569e9531810',
        },
        {
          url: '/images/crypto-icons/chat.svg',
          revision: '628cd99f9282597e71caa495c083bda4',
        },
        {
          url: '/images/crypto-icons/chips.svg',
          revision: '04e107206cc9d0936635179b879f46da',
        },
        {
          url: '/images/crypto-icons/chsb.svg',
          revision: 'c3f4521901ef2022440243acd8019ed2',
        },
        {
          url: '/images/crypto-icons/chz.svg',
          revision: '602ab3f464e72aa7b71e8647269cb4c9',
        },
        {
          url: '/images/crypto-icons/cix.svg',
          revision: '91af0f00544b8ca1e450b117b44434cb',
        },
        {
          url: '/images/crypto-icons/clam.svg',
          revision: '276342b561f0ece9cb319c73e6942c40',
        },
        {
          url: '/images/crypto-icons/cloak.svg',
          revision: '432a733bdaa078ead1847460b93e5c69',
        },
        {
          url: '/images/crypto-icons/cmm.svg',
          revision: '3da63282996b9b91ea5c3b983a041d44',
        },
        {
          url: '/images/crypto-icons/cmt.svg',
          revision: '261bdb55f83211fde3fb01f71211478a',
        },
        {
          url: '/images/crypto-icons/cnd.svg',
          revision: '46b73778fab9a899ed9db0f563446474',
        },
        {
          url: '/images/crypto-icons/cnx.svg',
          revision: '0093ccf7afbc1125dfc7449d9980c38c',
        },
        {
          url: '/images/crypto-icons/cny.svg',
          revision: '61c01da3fe0c0471fd1bd1d24e88e50d',
        },
        {
          url: '/images/crypto-icons/cob.svg',
          revision: 'c6669d6d9adb42fd3568d8cde573d8a1',
        },
        {
          url: '/images/crypto-icons/colx.svg',
          revision: '94b57c1d0d1147f5832a3943bba965a0',
        },
        {
          url: '/images/crypto-icons/comp.svg',
          revision: '1da1e7e9e866e9755b061a097c010152',
        },
        {
          url: '/images/crypto-icons/coqui.svg',
          revision: '44d784a53c2367e942257ff63f7ecb18',
        },
        {
          url: '/images/crypto-icons/cred.svg',
          revision: '46768cbff5e8349dbfe05275d646192a',
        },
        {
          url: '/images/crypto-icons/crpt.svg',
          revision: '29462f216924864c8b2e15f8bab83681',
        },
        {
          url: '/images/crypto-icons/crv.svg',
          revision: 'ade177cc8780dfe870cbf4520d7a7471',
        },
        {
          url: '/images/crypto-icons/crw.svg',
          revision: 'd21b89659e4689157f12e57e07df81a8',
        },
        {
          url: '/images/crypto-icons/cs.svg',
          revision: '43f56cd41cf1b2cd3d6b9f5c0ec35d69',
        },
        {
          url: '/images/crypto-icons/ctr.svg',
          revision: 'edc752917c498d5fd028019972be790a',
        },
        {
          url: '/images/crypto-icons/ctxc.svg',
          revision: '27d95af6b2036af1454641b7674d2c81',
        },
        {
          url: '/images/crypto-icons/cvc.svg',
          revision: '6c05b9033411de758c66a62a5d9e448f',
        },
        {
          url: '/images/crypto-icons/d.svg',
          revision: 'd8c030b6626e6e871dbac6c5e62794b4',
        },
        {
          url: '/images/crypto-icons/dai.svg',
          revision: 'a1c449c29fb22f5d5fbf800137a5a83f',
        },
        {
          url: '/images/crypto-icons/dash.svg',
          revision: '951d489f21a869f815a6d354161bf41b',
        },
        {
          url: '/images/crypto-icons/dat.svg',
          revision: '55cb0c2b229bab936f7399c67ac03274',
        },
        {
          url: '/images/crypto-icons/data.svg',
          revision: 'f5e5b80158f77f22f391276b54109b1c',
        },
        {
          url: '/images/crypto-icons/dbc.svg',
          revision: 'ba55ad0e86dc879c240564ce5135aaa3',
        },
        {
          url: '/images/crypto-icons/dcn.svg',
          revision: 'f3c07d96aed9d8990fe2ce990050753b',
        },
        {
          url: '/images/crypto-icons/dcr.svg',
          revision: '346913089aebd413a087e647f961abd3',
        },
        {
          url: '/images/crypto-icons/deez.svg',
          revision: '9427e02c72b68f42317a1e6e0af44fc4',
        },
        {
          url: '/images/crypto-icons/dent.svg',
          revision: '74b2cb7f30925d2f3ccd10f8d97c9ec3',
        },
        {
          url: '/images/crypto-icons/dew.svg',
          revision: 'fd3fdc145cac5c8258056f9d75866c39',
        },
        {
          url: '/images/crypto-icons/dgb.svg',
          revision: '7302cb08ebc4b0bd5f423fc150b060be',
        },
        {
          url: '/images/crypto-icons/dgd.svg',
          revision: '38e337fb31736732459ba2b38bd0ae43',
        },
        {
          url: '/images/crypto-icons/dlt.svg',
          revision: 'a7a90e78ad8da0baddf4fcfc2637f647',
        },
        {
          url: '/images/crypto-icons/dnt.svg',
          revision: '8f869cfee051919d057fa7f07daa5a60',
        },
        {
          url: '/images/crypto-icons/dock.svg',
          revision: '6178a259d04d3491b75232c82908e999',
        },
        {
          url: '/images/crypto-icons/doge.svg',
          revision: '7f63ff3991035fa33ea36c34360fca8d',
        },
        {
          url: '/images/crypto-icons/dot.svg',
          revision: '486e7eef2bde968d41679b90906dcfdf',
        },
        {
          url: '/images/crypto-icons/drgn.svg',
          revision: '883da39d38a92224d3fee12f9d68ac9f',
        },
        {
          url: '/images/crypto-icons/drop.svg',
          revision: '658472e956b3e215f218a88b6b5af860',
        },
        {
          url: '/images/crypto-icons/dta.svg',
          revision: '1229d79867d9d0796bffe0c1515e638d',
        },
        {
          url: '/images/crypto-icons/dth.svg',
          revision: '3345d70c27f6d4b8aa7aebceefee835c',
        },
        {
          url: '/images/crypto-icons/dtr.svg',
          revision: '7015342803fc742e5a32beab6d592490',
        },
        {
          url: '/images/crypto-icons/ebst.svg',
          revision: '4c42eda0050ef2f851c760cb243dab83',
        },
        {
          url: '/images/crypto-icons/eca.svg',
          revision: '152afe87c47c4eb31aa97abd139f02fc',
        },
        {
          url: '/images/crypto-icons/edg.svg',
          revision: 'b26efdb7dc4934877461c649459d12bd',
        },
        {
          url: '/images/crypto-icons/edo.svg',
          revision: '0ecb7b830be9de7fb645049f013f8c9e',
        },
        {
          url: '/images/crypto-icons/edoge.svg',
          revision: '77b7b1ced0791d311d13e5136d59c062',
        },
        {
          url: '/images/crypto-icons/ela.svg',
          revision: '2fe8d00bacf89b4bd665501898d44cbb',
        },
        {
          url: '/images/crypto-icons/elec.svg',
          revision: '02d132d7ccada68f120a0a7f9148c34d',
        },
        {
          url: '/images/crypto-icons/elf.svg',
          revision: '4c38d471af1feffcc098a7b7d5ef00d6',
        },
        {
          url: '/images/crypto-icons/elix.svg',
          revision: 'ffaef9078275016c95a9482db28b1c46',
        },
        {
          url: '/images/crypto-icons/ella.svg',
          revision: '3bf2c33278f72061c69192647af23ca0',
        },
        {
          url: '/images/crypto-icons/emb.svg',
          revision: '632efcb61be83d34c56e1d8d22e4fba7',
        },
        {
          url: '/images/crypto-icons/emc.svg',
          revision: 'e531e2b88a71eb899a2d2d59231ea6df',
        },
        {
          url: '/images/crypto-icons/emc2.svg',
          revision: '434419d996c9a5f0aac92ee2f06a4fcf',
        },
        {
          url: '/images/crypto-icons/eng.svg',
          revision: 'e8610538c23c4edca7cfda0e26e65b27',
        },
        {
          url: '/images/crypto-icons/enj.svg',
          revision: '9bd83db9e5b97941157e8daf8d563801',
        },
        {
          url: '/images/crypto-icons/entrp.svg',
          revision: '5052b0b3a79453550d0e90752bde5169',
        },
        {
          url: '/images/crypto-icons/eon.svg',
          revision: '6a7b6a8e88bdd15dfa1e5f4352d5d582',
        },
        {
          url: '/images/crypto-icons/eop.svg',
          revision: '36c8f6604f9a1ad70d518dbab3bf2c58',
        },
        {
          url: '/images/crypto-icons/eos.svg',
          revision: 'b9be8c85e0b1bcc632a5a088a20b3eb7',
        },
        {
          url: '/images/crypto-icons/eqli.svg',
          revision: '7ed87cfe2454a27ba8c39c08b2f15a92',
        },
        {
          url: '/images/crypto-icons/equa.svg',
          revision: '5c337294fa3cd5dde88fc07cf025fcd6',
        },
        {
          url: '/images/crypto-icons/etc.svg',
          revision: 'fc290deb2b3b4cadbc8cfeef41a2fd46',
        },
        {
          url: '/images/crypto-icons/eth.svg',
          revision: 'ed79179a3b6bc2c2ee4c54d8ade79b01',
        },
        {
          url: '/images/crypto-icons/ethos.svg',
          revision: '2c09004754477180d516d814dbe51e2a',
        },
        {
          url: '/images/crypto-icons/etn.svg',
          revision: 'bb77c713e2ad9f1e5aad0d380dd3d63f',
        },
        {
          url: '/images/crypto-icons/etp.svg',
          revision: '16ef238826c0f4ed294ed3405777b40d',
        },
        {
          url: '/images/crypto-icons/eur.svg',
          revision: '53410ca22448308c22ec2b6b820ab4e0',
        },
        {
          url: '/images/crypto-icons/evx.svg',
          revision: '5633c984b8be77345418a595b2736691',
        },
        {
          url: '/images/crypto-icons/exmo.svg',
          revision: '52c1cd8a9eb6d42686fa9299493ab2aa',
        },
        {
          url: '/images/crypto-icons/exp.svg',
          revision: 'd4c0629bbe2f8fbfac36e71cbe17cccb',
        },
        {
          url: '/images/crypto-icons/fair.svg',
          revision: '36a6ad99036ef64821ac4c43a4b17c52',
        },
        {
          url: '/images/crypto-icons/fct.svg',
          revision: '6603f1bf7d14cf566f0db0113a18a2fd',
        },
        {
          url: '/images/crypto-icons/fida.svg',
          revision: '1b84819089f5a23a2576b9493bef8ce9',
        },
        {
          url: '/images/crypto-icons/fil.svg',
          revision: '1ca7e9aa56e0ad07b133f015e2686714',
        },
        {
          url: '/images/crypto-icons/fjc.svg',
          revision: '99fb7f50ec339d01eab72330e246d236',
        },
        {
          url: '/images/crypto-icons/fldc.svg',
          revision: 'f740870dc73ee7aa6685baa5f9b6ca47',
        },
        {
          url: '/images/crypto-icons/flo.svg',
          revision: '49e763ece48eaa81dfb543fc2ac3c7b9',
        },
        {
          url: '/images/crypto-icons/flux.svg',
          revision: 'fecc398a05cacb2ba4321655c7db499f',
        },
        {
          url: '/images/crypto-icons/fsn.svg',
          revision: '807c57acd528a0530f904adbaa0c2fe3',
        },
        {
          url: '/images/crypto-icons/ftc.svg',
          revision: 'd4f3e386c4fafe370eb0493b9b98da54',
        },
        {
          url: '/images/crypto-icons/fuel.svg',
          revision: '9821b09bc7d5a13f4442818dd5e3bbc3',
        },
        {
          url: '/images/crypto-icons/fun.svg',
          revision: '244c472008fe60b1511bb9fa04c7c417',
        },
        {
          url: '/images/crypto-icons/game.svg',
          revision: 'c7f135f8e6b470d4f601ff78dbc0b732',
        },
        {
          url: '/images/crypto-icons/gas.svg',
          revision: 'bef270c0e49aebf7ea92968ce524fb6a',
        },
        {
          url: '/images/crypto-icons/gbp.svg',
          revision: '0f68aba7becd8d06960720e69922f64d',
        },
        {
          url: '/images/crypto-icons/gbx.svg',
          revision: 'a4bba686b3eeba796ad278115a8813ff',
        },
        {
          url: '/images/crypto-icons/gbyte.svg',
          revision: '4e6c7c62b4faf13db5ea1647118f02f1',
        },
        {
          url: '/images/crypto-icons/generic.svg',
          revision: 'a5f0fcad4fb3fdc02ad9246b63fbff39',
        },
        {
          url: '/images/crypto-icons/gin.svg',
          revision: '83f65c6f2f0ecc4b31020eae9806b85c',
        },
        {
          url: '/images/crypto-icons/glxt.svg',
          revision: '307c84f67c793b80871627f7c3202e44',
        },
        {
          url: '/images/crypto-icons/gmr.svg',
          revision: '1705da0e518e3662140391283885afbd',
        },
        {
          url: '/images/crypto-icons/gmt.svg',
          revision: '2f2a0d64407d94472f35f0aaef17bd00',
        },
        {
          url: '/images/crypto-icons/gno.svg',
          revision: '6a3745f494febe878fb61f71bf324b91',
        },
        {
          url: '/images/crypto-icons/gnt.svg',
          revision: '4c11ba326824faa5dc5860d07537ee8f',
        },
        {
          url: '/images/crypto-icons/gold.svg',
          revision: '9e21c0b550ee7a4f50510a0471a0fc55',
        },
        {
          url: '/images/crypto-icons/grc.svg',
          revision: 'c49461c7b10103c33d65920f2c085895',
        },
        {
          url: '/images/crypto-icons/grin.svg',
          revision: '295b12abe27d465cf4efc2933c613e2a',
        },
        {
          url: '/images/crypto-icons/grs.svg',
          revision: 'f366d4740a47716748ce3502277722fd',
        },
        {
          url: '/images/crypto-icons/grt.svg',
          revision: '4e96553e750f34f612dcb1061246d780',
        },
        {
          url: '/images/crypto-icons/gsc.svg',
          revision: '506a9b83ffb08d2f49b7a97e4868fab8',
        },
        {
          url: '/images/crypto-icons/gto.svg',
          revision: '366c43e905d10b3b4ebb418222efebd1',
        },
        {
          url: '/images/crypto-icons/gup.svg',
          revision: 'b9d1ecd75fc8515c4735b2317788a7d6',
        },
        {
          url: '/images/crypto-icons/gusd.svg',
          revision: '471ea5d92c7aa2fe507abedd33593c96',
        },
        {
          url: '/images/crypto-icons/gvt.svg',
          revision: '24fa7f260bf732d221b5c33c878048bd',
        },
        {
          url: '/images/crypto-icons/gxs.svg',
          revision: 'e73cbe8938ed257c717f971cfc8cc791',
        },
        {
          url: '/images/crypto-icons/gzr.svg',
          revision: 'a57dd02bc4b731442410dab4a21eac3f',
        },
        {
          url: '/images/crypto-icons/hight.svg',
          revision: '564d1517b71c5588d97f094dcfdf2745',
        },
        {
          url: '/images/crypto-icons/hns.svg',
          revision: '8539d8af601fe786161492336a27cc41',
        },
        {
          url: '/images/crypto-icons/hodl.svg',
          revision: 'a05f69214b43c790d3787ebfc656757d',
        },
        {
          url: '/images/crypto-icons/hot.svg',
          revision: 'b02094857e5210425500d65a7f28952b',
        },
        {
          url: '/images/crypto-icons/hpb.svg',
          revision: 'bbc52ea35901e476b22690b43baf4bdc',
        },
        {
          url: '/images/crypto-icons/hsr.svg',
          revision: 'beb3826b0daf7f455093bf3fd1617bc6',
        },
        {
          url: '/images/crypto-icons/ht.svg',
          revision: 'a691e42f82838e560a97cde1c4c8f9b9',
        },
        {
          url: '/images/crypto-icons/html.svg',
          revision: 'ae0cf8acdf15659325a966cd52e7fea8',
        },
        {
          url: '/images/crypto-icons/huc.svg',
          revision: 'f89dcc49bd5e1e07a902c8f23c32aa5b',
        },
        {
          url: '/images/crypto-icons/husd.svg',
          revision: 'c6651a58b2bd401f7fb2854fa765183f',
        },
        {
          url: '/images/crypto-icons/hush.svg',
          revision: 'e60dd53fded8552223c2cbb25948bc02',
        },
        {
          url: '/images/crypto-icons/icn.svg',
          revision: '3f692eb0420c9242034b97d22440ea0c',
        },
        {
          url: '/images/crypto-icons/icp.svg',
          revision: 'b78b2ee048050cae38d73ece767e4a0c',
        },
        {
          url: '/images/crypto-icons/icx.svg',
          revision: '8fad20c1587fc5a2959d466a848165e5',
        },
        {
          url: '/images/crypto-icons/ignis.svg',
          revision: '5b32cfcba660774b86a4c1c50cbca8de',
        },
        {
          url: '/images/crypto-icons/ilk.svg',
          revision: 'feb3634d4c02daf29ca483531305fdb4',
        },
        {
          url: '/images/crypto-icons/ink.svg',
          revision: '908abf6e2d84ae4201bf1811afa5a29b',
        },
        {
          url: '/images/crypto-icons/ins.svg',
          revision: '50656a74a2b8c3f6de846e6376682c71',
        },
        {
          url: '/images/crypto-icons/ion.svg',
          revision: 'a246c4df24797f510db4a62b3c75f703',
        },
        {
          url: '/images/crypto-icons/iop.svg',
          revision: '0fe15abea57856b60778680ac1ea084e',
        },
        {
          url: '/images/crypto-icons/iost.svg',
          revision: 'c5386ede9477f58456518445092afdf5',
        },
        {
          url: '/images/crypto-icons/iotx.svg',
          revision: '2fb4217499ded9a81d42fca830ccdbc7',
        },
        {
          url: '/images/crypto-icons/iq.svg',
          revision: '0325674f1f90e8038a884b14c32f873b',
        },
        {
          url: '/images/crypto-icons/itc.svg',
          revision: '852986450131147484d6dcd0640fcd49',
        },
        {
          url: '/images/crypto-icons/jnt.svg',
          revision: 'e55f8ae8cc1eff5dc802544867f9580f',
        },
        {
          url: '/images/crypto-icons/jpy.svg',
          revision: '673acadd16e3faf972d86815efbb6725',
        },
        {
          url: '/images/crypto-icons/kcs.svg',
          revision: '376cde89e38a395eb24a7b909410620f',
        },
        {
          url: '/images/crypto-icons/kin.svg',
          revision: 'c0e7c01326237e96f108b939c9cd29de',
        },
        {
          url: '/images/crypto-icons/klown.svg',
          revision: '1bb49b4a617f681a70ce0f7c3dd263b4',
        },
        {
          url: '/images/crypto-icons/kmd.svg',
          revision: '5ad4630c7b548992c7e6eb3512ebeaae',
        },
        {
          url: '/images/crypto-icons/knc.svg',
          revision: '413200d14d0b97dd47d5f1983694cda1',
        },
        {
          url: '/images/crypto-icons/krb.svg',
          revision: 'f04c2a642531466cdec4d136f9e88f06',
        },
        {
          url: '/images/crypto-icons/ksm.svg',
          revision: '301127d832d47e7903337c26e3fec09e',
        },
        {
          url: '/images/crypto-icons/lbc.svg',
          revision: '8758f815a5dc3078dea5c37ec4f9b31d',
        },
        {
          url: '/images/crypto-icons/lend.svg',
          revision: '0916c5d8ad8e396b72b8bee30701fcde',
        },
        {
          url: '/images/crypto-icons/leo.svg',
          revision: '7952199e10092bf6da15dee3ddc7d35d',
        },
        {
          url: '/images/crypto-icons/link.svg',
          revision: '74046b9638f36b220a18ab5e6238341a',
        },
        {
          url: '/images/crypto-icons/lkk.svg',
          revision: 'b6b77c054059a3d7dff7b25c9588e8e5',
        },
        {
          url: '/images/crypto-icons/loom.svg',
          revision: 'ee77132f57a313e7529781768c322d23',
        },
        {
          url: '/images/crypto-icons/lpt.svg',
          revision: '7f1fd959d994005346e642304ea5400c',
        },
        {
          url: '/images/crypto-icons/lrc.svg',
          revision: 'f54d5988350bdcd5260e6935c6ed7ee6',
        },
        {
          url: '/images/crypto-icons/lsk.svg',
          revision: 'aab8a26ad6f90c1b3010b6369344a93b',
        },
        {
          url: '/images/crypto-icons/ltc.svg',
          revision: 'cdae08509e949c7b6216a744b14f0087',
        },
        {
          url: '/images/crypto-icons/lun.svg',
          revision: 'a23e24d690ff4450f4d6f87447eb5508',
        },
        {
          url: '/images/crypto-icons/maid.svg',
          revision: '3acced97dfd544a698b1f32989c8dd2b',
        },
        {
          url: '/images/crypto-icons/mana.svg',
          revision: '034e32c22a56a05e37b3c16962239713',
        },
        {
          url: '/images/crypto-icons/matic.svg',
          revision: '095ffad213750345fe1b2fd3cde188fd',
        },
        {
          url: '/images/crypto-icons/max.svg',
          revision: '1ebb6473670897d9149f1b4d5af386d6',
        },
        {
          url: '/images/crypto-icons/mcap.svg',
          revision: 'e6ddac27f654825895731c9306e5709e',
        },
        {
          url: '/images/crypto-icons/mco.svg',
          revision: 'a9db68cd0a69397a179dd4d55c3aa115',
        },
        {
          url: '/images/crypto-icons/mda.svg',
          revision: '993d542ec2123d9b41fe63dc864bc841',
        },
        {
          url: '/images/crypto-icons/mds.svg',
          revision: '47d17c9356db62dad90b3f8860341b5d',
        },
        {
          url: '/images/crypto-icons/med.svg',
          revision: '9930adce5dd8c22dae840909dba92572',
        },
        {
          url: '/images/crypto-icons/meetone.svg',
          revision: 'e2f8bff641e234a03fc268b49855bba4',
        },
        {
          url: '/images/crypto-icons/mft.svg',
          revision: 'f6a5c66ec38cf3eb7a0627c3f900bb52',
        },
        {
          url: '/images/crypto-icons/miota.svg',
          revision: '70c67b29fc0d8af9a764845c8d328d24',
        },
        {
          url: '/images/crypto-icons/mith.svg',
          revision: '7f0d7cfc94e53f8d243381fdc6fc905c',
        },
        {
          url: '/images/crypto-icons/mkr.svg',
          revision: '3f8c8bd4423132a69df336c27fbc0ef4',
        },
        {
          url: '/images/crypto-icons/mln.svg',
          revision: 'd62f04811bdd6881fda7a6b3ba2bf651',
        },
        {
          url: '/images/crypto-icons/mnx.svg',
          revision: 'ed3d209cba5a44904191716cdb13edbe',
        },
        {
          url: '/images/crypto-icons/mnz.svg',
          revision: '75f46eec8a2fda16f056ac3601d479d7',
        },
        {
          url: '/images/crypto-icons/moac.svg',
          revision: '7edd6826ab86dc2cf1ae2b5d2b242eea',
        },
        {
          url: '/images/crypto-icons/mod.svg',
          revision: '610b5e74b6d6066b2fa8ea7190a5c6ab',
        },
        {
          url: '/images/crypto-icons/mona.svg',
          revision: '2dbfb37c342c817b99332a0579a750b6',
        },
        {
          url: '/images/crypto-icons/msr.svg',
          revision: '7567ea8362ea9f777353cee63707b81a',
        },
        {
          url: '/images/crypto-icons/mth.svg',
          revision: '132f3005c84c64f474d70c0832900433',
        },
        {
          url: '/images/crypto-icons/mtl.svg',
          revision: 'af0a31c7b501c6b6f05a667b41dc4bbf',
        },
        {
          url: '/images/crypto-icons/music.svg',
          revision: 'b782c0d5c73139b71afe3cf17789cee3',
        },
        {
          url: '/images/crypto-icons/mzc.svg',
          revision: '4f5ab18af703d8624a2939be6ec19572',
        },
        {
          url: '/images/crypto-icons/nano.svg',
          revision: '6eedd5917572b18d79a39a5efe6ad39e',
        },
        {
          url: '/images/crypto-icons/nas.svg',
          revision: 'b23e564cfb4062079e51d5257fd00eec',
        },
        {
          url: '/images/crypto-icons/nav.svg',
          revision: '6a8b7ae0eb44ab211c321eae8a38a92f',
        },
        {
          url: '/images/crypto-icons/ncash.svg',
          revision: '64a77506ad75d67986c1f196a1e5e686',
        },
        {
          url: '/images/crypto-icons/ndz.svg',
          revision: '430c6bdd92a41f9f69a29a16434566cb',
        },
        {
          url: '/images/crypto-icons/nebl.svg',
          revision: '032f04e887702ac96dda72082e77e53d',
        },
        {
          url: '/images/crypto-icons/neo.svg',
          revision: 'bef270c0e49aebf7ea92968ce524fb6a',
        },
        {
          url: '/images/crypto-icons/neos.svg',
          revision: 'bd1b141bab30e66dd9d6a85bcbb6858c',
        },
        {
          url: '/images/crypto-icons/neu.svg',
          revision: '172d072d581abfa84bbc226b4d9de77e',
        },
        {
          url: '/images/crypto-icons/nexo.svg',
          revision: '7309ac8b6cd72e0261b945c55d7fb80c',
        },
        {
          url: '/images/crypto-icons/ngc.svg',
          revision: '73653f0fe41f019cfc1ea50c1ed428e8',
        },
        {
          url: '/images/crypto-icons/nio.svg',
          revision: 'ecdb97f3e3166a0c8be0acb4988e9bea',
        },
        {
          url: '/images/crypto-icons/nkn.svg',
          revision: '4d8db60fda0bac24fb27fe11a3c08456',
        },
        {
          url: '/images/crypto-icons/nlc2.svg',
          revision: '79cd5e5bfb00ab9923de01f396ffb702',
        },
        {
          url: '/images/crypto-icons/nlg.svg',
          revision: 'bef2a1cf955e04f52af4431535be058c',
        },
        {
          url: '/images/crypto-icons/nmc.svg',
          revision: '157229f8965df5db623a1bafa009c5de',
        },
        {
          url: '/images/crypto-icons/nmr.svg',
          revision: '124be6a9fbc64ef3d8a0603ff2c2f06f',
        },
        {
          url: '/images/crypto-icons/npxs.svg',
          revision: '22c8a0c5ea0d198f1ae28b8577c07f7a',
        },
        {
          url: '/images/crypto-icons/ntbc.svg',
          revision: '94770d732a046f48a5003f12375dadcc',
        },
        {
          url: '/images/crypto-icons/nuls.svg',
          revision: '3a5447ba76497afee56b1adfcd1ba3f6',
        },
        {
          url: '/images/crypto-icons/nxs.svg',
          revision: '84b83a7b94a4b2317491aa58bc0af979',
        },
        {
          url: '/images/crypto-icons/nxt.svg',
          revision: '6f262f670a0c977aabad908b7f277984',
        },
        {
          url: '/images/crypto-icons/oax.svg',
          revision: 'cebb56b0ab3ed23dbde8aac84faa879d',
        },
        {
          url: '/images/crypto-icons/ok.svg',
          revision: 'b4023e7789ce054a4ea9c5fcaf5e3df3',
        },
        {
          url: '/images/crypto-icons/omg.svg',
          revision: '50f14ac2334abf52cd3f059e9ad909c0',
        },
        {
          url: '/images/crypto-icons/omni.svg',
          revision: 'cf53d168dfc155afe80f80209ab502c0',
        },
        {
          url: '/images/crypto-icons/one.svg',
          revision: '61e294db0f05834552727d9ff4c085bf',
        },
        {
          url: '/images/crypto-icons/ong.svg',
          revision: 'dd4423adb42d0b8bf38d27ab49186c69',
        },
        {
          url: '/images/crypto-icons/ont.svg',
          revision: 'd3eaadb30c18e1dab3c3e011449882d3',
        },
        {
          url: '/images/crypto-icons/oot.svg',
          revision: '1a9d0d573e5be6ca71ab9eb1f8a3bfdf',
        },
        {
          url: '/images/crypto-icons/ost.svg',
          revision: 'ea7d89fcacd16a846be66b3de1b40785',
        },
        {
          url: '/images/crypto-icons/ox.svg',
          revision: 'e1e8c840af51c0239c7d1f6a0db1cd24',
        },
        {
          url: '/images/crypto-icons/oxt.svg',
          revision: '39029fe9ca6b57c9c01a92cd242fb0d7',
        },
        {
          url: '/images/crypto-icons/oxy.svg',
          revision: 'fe089c0a58b212a2fd58af3bb20c90b1',
        },
        {
          url: '/images/crypto-icons/part.svg',
          revision: 'decd220b6d7ac92c11ac321c47763d80',
        },
        {
          url: '/images/crypto-icons/pasc.svg',
          revision: 'e452aea754078273fd89c9917215ec7c',
        },
        {
          url: '/images/crypto-icons/pasl.svg',
          revision: '7356b0def75ac6e17750df270d8859a3',
        },
        {
          url: '/images/crypto-icons/pax.svg',
          revision: '5b82a3ac821f856971b68be6af9a5dc8',
        },
        {
          url: '/images/crypto-icons/paxg.svg',
          revision: 'cf294e6ac7b7612fd8166a8ffcf8b5ca',
        },
        {
          url: '/images/crypto-icons/pay.svg',
          revision: '1ac952c5d36c3a2da1bc623b5f9c91d9',
        },
        {
          url: '/images/crypto-icons/payx.svg',
          revision: '5b6325c21532884418c6986ff23de7ea',
        },
        {
          url: '/images/crypto-icons/pink.svg',
          revision: 'fdd6db17b3376cdfaf3fd1b7072dfd54',
        },
        {
          url: '/images/crypto-icons/pirl.svg',
          revision: '748fc297087d2daf352a372f23d7c5e9',
        },
        {
          url: '/images/crypto-icons/pivx.svg',
          revision: '0f11fbd43e5ee7c11a007a7d4d1378cf',
        },
        {
          url: '/images/crypto-icons/plr.svg',
          revision: 'b64df3cf2613911c562699d24a899c04',
        },
        {
          url: '/images/crypto-icons/poa.svg',
          revision: 'a7edf9beda8721a092f31fe730772f69',
        },
        {
          url: '/images/crypto-icons/poe.svg',
          revision: '9a122ab6ee6332700422bf6cc58b31e3',
        },
        {
          url: '/images/crypto-icons/polis.svg',
          revision: '6af547e45aae14c8ad8c73f38a2f55ff',
        },
        {
          url: '/images/crypto-icons/poly.svg',
          revision: '0423fad06783cd1989eebc0f3033eb7d',
        },
        {
          url: '/images/crypto-icons/pot.svg',
          revision: '0318866ebab686da04cc145c5e3b2c57',
        },
        {
          url: '/images/crypto-icons/powr.svg',
          revision: '1a1541ff8e7007cdf40b3e4a2291ea5a',
        },
        {
          url: '/images/crypto-icons/ppc.svg',
          revision: '18a0593a6153ebaa392a72609bc4811b',
        },
        {
          url: '/images/crypto-icons/ppp.svg',
          revision: '151bd6707a4e2a95e509030b881dc061',
        },
        {
          url: '/images/crypto-icons/ppt.svg',
          revision: 'a886ce16aa8cb706fcd6b2e4af10599e',
        },
        {
          url: '/images/crypto-icons/pre.svg',
          revision: 'db9a3d7a9929684ae8b39e24d1ae0cab',
        },
        {
          url: '/images/crypto-icons/prl.svg',
          revision: '4c5c3157600cc551d31f9978ba997092',
        },
        {
          url: '/images/crypto-icons/pungo.svg',
          revision: 'd6c39fcd5d923fea05fdcf1205eceafd',
        },
        {
          url: '/images/crypto-icons/pura.svg',
          revision: '2c63dfcda570e4212875acad2e568dd5',
        },
        {
          url: '/images/crypto-icons/qash.svg',
          revision: 'd38dde496bc4b448356693a87f6f2362',
        },
        {
          url: '/images/crypto-icons/qiwi.svg',
          revision: '78e8574c63fbf02db37c9c76f0acb34e',
        },
        {
          url: '/images/crypto-icons/qlc.svg',
          revision: '4fa6210db86838409b3f4b37f063cc22',
        },
        {
          url: '/images/crypto-icons/qnt.svg',
          revision: '6f9208437ffb2037bc3251c095b88fd2',
        },
        {
          url: '/images/crypto-icons/qrl.svg',
          revision: '76efbee84bd2c376f106d35d42a53858',
        },
        {
          url: '/images/crypto-icons/qsp.svg',
          revision: '63f2ccb5feeb246e47a50a9bf05e02d5',
        },
        {
          url: '/images/crypto-icons/qtum.svg',
          revision: 'ef050ffeef01f1d3528af4b14c050c9d',
        },
        {
          url: '/images/crypto-icons/r.svg',
          revision: '64c2f5d8d67f6f152d5915146dea5077',
        },
        {
          url: '/images/crypto-icons/rads.svg',
          revision: '5a97cd96e61d894c3ba8050fa081c7d5',
        },
        {
          url: '/images/crypto-icons/rap.svg',
          revision: '57465a34cba045c8c4df99a92aaeac62',
        },
        {
          url: '/images/crypto-icons/ray.svg',
          revision: 'acfb3859901f51a959fe54eb65aa211e',
        },
        {
          url: '/images/crypto-icons/rcn.svg',
          revision: '9250724375b5403e06eaeaa972d5482d',
        },
        {
          url: '/images/crypto-icons/rdd.svg',
          revision: '94f8decefb4c5a05c578746269193590',
        },
        {
          url: '/images/crypto-icons/rdn.svg',
          revision: '4d2034db956dc63828b276d4354b736c',
        },
        {
          url: '/images/crypto-icons/ren.svg',
          revision: 'a7e80f71b817fd4e230d91f608787e27',
        },
        {
          url: '/images/crypto-icons/rep.svg',
          revision: '158d4cbb86b851249bcbed431add85f7',
        },
        {
          url: '/images/crypto-icons/repv2.svg',
          revision: 'ab45cdcc30091c3c32ab068ea6c67927',
        },
        {
          url: '/images/crypto-icons/req.svg',
          revision: 'b1295355e44ec293e005a414851aab00',
        },
        {
          url: '/images/crypto-icons/rhoc.svg',
          revision: '859e369f14d78b8df7059ca7984e393a',
        },
        {
          url: '/images/crypto-icons/ric.svg',
          revision: '598f2ad88ba82428f413b9b8e8f9aaad',
        },
        {
          url: '/images/crypto-icons/rise.svg',
          revision: 'f672a1e6c48ecc7bbe80249f25af395b',
        },
        {
          url: '/images/crypto-icons/rlc.svg',
          revision: '39328355f43b8499019af7bbb52a3cce',
        },
        {
          url: '/images/crypto-icons/rpx.svg',
          revision: 'df89cb07743eeb6535c03354962f7ed3',
        },
        {
          url: '/images/crypto-icons/rub.svg',
          revision: '63cd5c962709b87d11b70f131999a1f2',
        },
        {
          url: '/images/crypto-icons/rvn.svg',
          revision: 'da1db9d242583e44b252162c06c7bdab',
        },
        {
          url: '/images/crypto-icons/ryo.svg',
          revision: '29893fb52a7d8c962a2431855a3a5c70',
        },
        {
          url: '/images/crypto-icons/safe.svg',
          revision: '5d1c9b599748744a3e2fae2069b7dc4c',
        },
        {
          url: '/images/crypto-icons/safemoon.svg',
          revision: '17d96d80c4e384ea8ef0cf533586a0fa',
        },
        {
          url: '/images/crypto-icons/sai.svg',
          revision: '873536ff251b2ad439c4baedf544763e',
        },
        {
          url: '/images/crypto-icons/salt.svg',
          revision: 'f5258b6e7f08e96c3ac072e62e845a9d',
        },
        {
          url: '/images/crypto-icons/san.svg',
          revision: '56a91c259aca47c266fb8e63da4524fe',
        },
        {
          url: '/images/crypto-icons/sand.svg',
          revision: 'cf48aa138477dcdc8c8e9945d14d145b',
        },
        {
          url: '/images/crypto-icons/sbd.svg',
          revision: 'edcf1eca6a945a38c1c9fabc68890b0d',
        },
        {
          url: '/images/crypto-icons/sberbank.svg',
          revision: 'c0fc9ed4fa518356d55195f1e572f0cb',
        },
        {
          url: '/images/crypto-icons/sc.svg',
          revision: '5a8c79c042cab4e7c6d77b8a34500f78',
        },
        {
          url: '/images/crypto-icons/ser.svg',
          revision: '3bad31b53f9680dfed08d9357f807035',
        },
        {
          url: '/images/crypto-icons/shift.svg',
          revision: 'cc3ec31c506ab4432feceaff80a6ab92',
        },
        {
          url: '/images/crypto-icons/sib.svg',
          revision: 'dc64743650268261ceea496ecc97cba4',
        },
        {
          url: '/images/crypto-icons/sin.svg',
          revision: 'ed839e6aa6c7f1deea53c1489648daf0',
        },
        {
          url: '/images/crypto-icons/skl.svg',
          revision: '02bb71f7be412d5d0377ada9bc9fe01f',
        },
        {
          url: '/images/crypto-icons/sky.svg',
          revision: '6ea750415ed104b436620136f4ca8161',
        },
        {
          url: '/images/crypto-icons/slr.svg',
          revision: '00b07d3b6ccfddf9a2ae89071b7ed94d',
        },
        {
          url: '/images/crypto-icons/sls.svg',
          revision: 'f98bc0a98b492d022c46c46cc9314043',
        },
        {
          url: '/images/crypto-icons/smart.svg',
          revision: '858ac51666135189f81f4072238a7af0',
        },
        {
          url: '/images/crypto-icons/sngls.svg',
          revision: 'b27df4f26775896c21da64c6f9a75fc2',
        },
        {
          url: '/images/crypto-icons/snm.svg',
          revision: 'fb919db48ec87218d908018831b4fbdb',
        },
        {
          url: '/images/crypto-icons/snt.svg',
          revision: '0bdde329595e63c99b0af261fbe5f219',
        },
        {
          url: '/images/crypto-icons/snx.svg',
          revision: '9803069ead686b3119c8fcb05485d670',
        },
        {
          url: '/images/crypto-icons/soc.svg',
          revision: '667dbb5af1f76a01e13c8334ddbde24b',
        },
        {
          url: '/images/crypto-icons/sol.svg',
          revision: '8f48b6e8a88f7b0aa4b6598aa7715465',
        },
        {
          url: '/images/crypto-icons/spacehbit.svg',
          revision: 'ac4456c2c115242117e5153ee53ca530',
        },
        {
          url: '/images/crypto-icons/spank.svg',
          revision: 'ee576ddcaed82dde62991c78bd8268ed',
        },
        {
          url: '/images/crypto-icons/sphtx.svg',
          revision: 'a9a8d8407d28201994b9200b18418e1f',
        },
        {
          url: '/images/crypto-icons/srn.svg',
          revision: 'd81c354ce77b22a1e6ea20118236a11c',
        },
        {
          url: '/images/crypto-icons/stak.svg',
          revision: 'f5991d3a922905d5a7cf686e8c51a840',
        },
        {
          url: '/images/crypto-icons/start.svg',
          revision: '2615a492682ca9d81b2af7a1371553e1',
        },
        {
          url: '/images/crypto-icons/steem.svg',
          revision: '768b8fa1b7c1e33031e27b0ac6a9f8ec',
        },
        {
          url: '/images/crypto-icons/storj.svg',
          revision: 'e7581753a30e3d97e68dcd63bfafcd74',
        },
        {
          url: '/images/crypto-icons/storm.svg',
          revision: '491fc2c36da92c93d3e3ce583af6b662',
        },
        {
          url: '/images/crypto-icons/stox.svg',
          revision: 'ecfc86a7abd64bb68f7d66214b4cc4ee',
        },
        {
          url: '/images/crypto-icons/stq.svg',
          revision: '899670d500760031ca8647647b35adc0',
        },
        {
          url: '/images/crypto-icons/strat.svg',
          revision: '71875d94318ad7feef0c0b14dbeb24f4',
        },
        {
          url: '/images/crypto-icons/stx.svg',
          revision: '3c345d896ff9e9a129cff734e61b7f35',
        },
        {
          url: '/images/crypto-icons/sub.svg',
          revision: 'f496dbf5c59c3d2a93b76e9f4d4f33c6',
        },
        {
          url: '/images/crypto-icons/sumo.svg',
          revision: 'd36c9abd0e3dc3f716380187a07d22ec',
        },
        {
          url: '/images/crypto-icons/sushi.svg',
          revision: 'cfd02b507622652b6e5ea47072c82deb',
        },
        {
          url: '/images/crypto-icons/sys.svg',
          revision: '2d64b25d0fc0d64fe6f1928ad4e70327',
        },
        {
          url: '/images/crypto-icons/taas.svg',
          revision: '3a1519ebab9eb16ac265d4d010427239',
        },
        {
          url: '/images/crypto-icons/tau.svg',
          revision: 'd03d4ca275697d01c0b7f9e398ac458b',
        },
        {
          url: '/images/crypto-icons/tbx.svg',
          revision: 'a9812c0767c015da75d416a47693b26a',
        },
        {
          url: '/images/crypto-icons/tel.svg',
          revision: 'dc1e5d3c26cec6358e361e4b4b8166a7',
        },
        {
          url: '/images/crypto-icons/ten.svg',
          revision: 'ca11f84a9bda7af1c2fd94f79d3f5e99',
        },
        {
          url: '/images/crypto-icons/tern.svg',
          revision: '54662f6046d28fc938a5c304ca18f4a6',
        },
        {
          url: '/images/crypto-icons/tgch.svg',
          revision: '6bffcec3138afc3564171468742d159e',
        },
        {
          url: '/images/crypto-icons/theta.svg',
          revision: 'a505f47e4870e266a525970e3efac0a9',
        },
        {
          url: '/images/crypto-icons/tix.svg',
          revision: 'e6105e5ca4c0742957dd0cd6403e3696',
        },
        {
          url: '/images/crypto-icons/tkn.svg',
          revision: '89521f2a0b5b127b6189794a321d75d5',
        },
        {
          url: '/images/crypto-icons/tks.svg',
          revision: 'c5874a66e17fff60025ed969c5438020',
        },
        {
          url: '/images/crypto-icons/tnb.svg',
          revision: 'af3f37f6ab8ffc7474096588e99810ba',
        },
        {
          url: '/images/crypto-icons/tnc.svg',
          revision: '071f900cbf982428d3c7f10b93bd0d6a',
        },
        {
          url: '/images/crypto-icons/tnt.svg',
          revision: '32b44795f3eed87030c010e43de93d1b',
        },
        {
          url: '/images/crypto-icons/tomo.svg',
          revision: '7b35ddd3d94a81e73cb74164a36bafd9',
        },
        {
          url: '/images/crypto-icons/tpay.svg',
          revision: 'f389746abd957a35588879faee2e0e2c',
        },
        {
          url: '/images/crypto-icons/trig.svg',
          revision: '7374a4da3e2420ed5f3408d6c87f84e3',
        },
        {
          url: '/images/crypto-icons/trtl.svg',
          revision: '1671411c590a7d53e2b8ff952c9b1a9c',
        },
        {
          url: '/images/crypto-icons/trx.svg',
          revision: '6e61dfd0a444ac582c5abf4c384c4b5b',
        },
        {
          url: '/images/crypto-icons/tusd.svg',
          revision: '2ff5d895e5ad8af24aeb26fd4b984e75',
        },
        {
          url: '/images/crypto-icons/tzc.svg',
          revision: '226b270036d47359665ec7db6d2ab0b1',
        },
        {
          url: '/images/crypto-icons/ubq.svg',
          revision: '126ad822299b4d36fef6b22b9d574e99',
        },
        {
          url: '/images/crypto-icons/uma.svg',
          revision: '30e6901c9fc7e8bef4005863d8058d39',
        },
        {
          url: '/images/crypto-icons/uni.svg',
          revision: 'a4880d7266ea7ae189b03aad2fc7b5d9',
        },
        {
          url: '/images/crypto-icons/unity.svg',
          revision: '2cffd271eb68a97d6f62f48f8ccfccdf',
        },
        {
          url: '/images/crypto-icons/usd.svg',
          revision: '2e3b1da67c8e2a3584fd25459fc64c62',
        },
        {
          url: '/images/crypto-icons/usdc.svg',
          revision: '1bc59a3a2071fd7c268ebdb58658e588',
        },
        {
          url: '/images/crypto-icons/usdt.svg',
          revision: 'f07b8f90c0eff1b76b402a2d34f0cdbe',
        },
        {
          url: '/images/crypto-icons/utk.svg',
          revision: '2e7276451aba8b863d4ed0dc1e8512d7',
        },
        {
          url: '/images/crypto-icons/veri.svg',
          revision: '4f540976ed65dc21b2d38bdaaf5c775c',
        },
        {
          url: '/images/crypto-icons/vet.svg',
          revision: 'f37a730a1998e2c717432bebcf28f600',
        },
        {
          url: '/images/crypto-icons/via.svg',
          revision: '872af59db703e597a795e7751c90aa2f',
        },
        {
          url: '/images/crypto-icons/vib.svg',
          revision: '417ff242fc350a571623e1b410fa001c',
        },
        {
          url: '/images/crypto-icons/vibe.svg',
          revision: 'a348f668f4d0c059bacee7fcbfeb3ce9',
        },
        {
          url: '/images/crypto-icons/vivo.svg',
          revision: '4bcbd9e3643a33d23194c5207da357cd',
        },
        {
          url: '/images/crypto-icons/vrc.svg',
          revision: 'acfd9c04a8906624f71101df465b56ba',
        },
        {
          url: '/images/crypto-icons/vrsc.svg',
          revision: '2d419c27134bbb3b27e158d0a05d0c8b',
        },
        {
          url: '/images/crypto-icons/vtc.svg',
          revision: '8a432efab3e1762e974ef3289505788a',
        },
        {
          url: '/images/crypto-icons/vtho.svg',
          revision: '4423d8969d4aeee4ca74c46e8c4fd445',
        },
        {
          url: '/images/crypto-icons/wabi.svg',
          revision: '914312226ecb608fa3116b10ac36d3bc',
        },
        {
          url: '/images/crypto-icons/wan.svg',
          revision: 'c58949f86381eaaa81fb1b64f6c83ab3',
        },
        {
          url: '/images/crypto-icons/waves.svg',
          revision: '4b79230484324ff81796444f7de77bb5',
        },
        {
          url: '/images/crypto-icons/wax.svg',
          revision: 'e187c929b95b0c2ed7254b0b09b598ee',
        },
        {
          url: '/images/crypto-icons/wbtc.svg',
          revision: '6eaf8be6a72a14e2d687912ecd7bf08b',
        },
        {
          url: '/images/crypto-icons/wgr.svg',
          revision: 'bd1572e4f54d45116def6e0c552b3868',
        },
        {
          url: '/images/crypto-icons/wicc.svg',
          revision: 'eea25ca9e81e07c3bbe47f0323ba0bf4',
        },
        {
          url: '/images/crypto-icons/wings.svg',
          revision: '8b5815f9706d204413b6985dbea2aec6',
        },
        {
          url: '/images/crypto-icons/wpr.svg',
          revision: '6a5f89bc4ce2b241dd2248467d3f5f1c',
        },
        {
          url: '/images/crypto-icons/wtc.svg',
          revision: '7de51d8454de5ac05457fc46948355a4',
        },
        {
          url: '/images/crypto-icons/x.svg',
          revision: 'bb8a528f545a48881dd5966142b96eab',
        },
        {
          url: '/images/crypto-icons/xas.svg',
          revision: '2e1a5a0300a4bb4e9873433d28a163c1',
        },
        {
          url: '/images/crypto-icons/xbc.svg',
          revision: 'c97015c317ea338d28f575d29b63aaa1',
        },
        {
          url: '/images/crypto-icons/xbp.svg',
          revision: 'd3b5a2a4dd8ed6fc86c30d227663ba46',
        },
        {
          url: '/images/crypto-icons/xby.svg',
          revision: '3634f1a4059ed77184a95994995c939c',
        },
        {
          url: '/images/crypto-icons/xcp.svg',
          revision: '493868e3390f12495c34ec3124659161',
        },
        {
          url: '/images/crypto-icons/xdn.svg',
          revision: 'd1bcab8025be38370b77683c396dc24d',
        },
        {
          url: '/images/crypto-icons/xem.svg',
          revision: 'ae124a501d0dabd7445edbd687df7947',
        },
        {
          url: '/images/crypto-icons/xin.svg',
          revision: 'cd553933c811371c71b8dfbe105aceac',
        },
        {
          url: '/images/crypto-icons/xlm.svg',
          revision: '29ac2fa4e98cbd3cafe6d55bbee72938',
        },
        {
          url: '/images/crypto-icons/xmcc.svg',
          revision: '51b536e632dfe703b4f443b82d79562a',
        },
        {
          url: '/images/crypto-icons/xmg.svg',
          revision: '05e0b15e795ffc91a0fb14289cce6993',
        },
        {
          url: '/images/crypto-icons/xmo.svg',
          revision: '164decb6f6f447a97a84439bdd8ed137',
        },
        {
          url: '/images/crypto-icons/xmr.svg',
          revision: '26a14f1c0b5bfac8c7bad92258c341ec',
        },
        {
          url: '/images/crypto-icons/xmy.svg',
          revision: 'ff9e8dd32b482aef4f2cd580d7145208',
        },
        {
          url: '/images/crypto-icons/xp.svg',
          revision: '066eb8f9f7fc3cf848ffdd0b6f1ce68c',
        },
        {
          url: '/images/crypto-icons/xpa.svg',
          revision: 'f2c7a06434e50bc0c6250af3ca96fb17',
        },
        {
          url: '/images/crypto-icons/xpm.svg',
          revision: 'c7ac994e04b064b0696560ade5811b91',
        },
        {
          url: '/images/crypto-icons/xpr.svg',
          revision: 'a9c7312db35b85e9d57f845537895d72',
        },
        {
          url: '/images/crypto-icons/xrp.svg',
          revision: '84ce7542e288e2bf98a4da4dbde2594e',
        },
        {
          url: '/images/crypto-icons/xsg.svg',
          revision: '5c2697a1ecf20623434cac06c69330e1',
        },
        {
          url: '/images/crypto-icons/xtz.svg',
          revision: '6b052c0e86977b4978c970914826f118',
        },
        {
          url: '/images/crypto-icons/xuc.svg',
          revision: '721b3ad5426aff37ac374c886a20e1bc',
        },
        {
          url: '/images/crypto-icons/xvc.svg',
          revision: '95c8612ca9b27b82a0897401f09253cc',
        },
        {
          url: '/images/crypto-icons/xvg.svg',
          revision: '29f106ba6122462194509f0279ea1631',
        },
        {
          url: '/images/crypto-icons/xzc.svg',
          revision: '2eeb3249688f8687d4444fb42d3826b4',
        },
        {
          url: '/images/crypto-icons/yfi.svg',
          revision: '1ac4b34e3479fbde19f9c01f91be0d73',
        },
        {
          url: '/images/crypto-icons/yoyow.svg',
          revision: '9196885c667f458394136e355a612024',
        },
        {
          url: '/images/crypto-icons/zcl.svg',
          revision: 'bce69aea2353cbd3e2c885c7eb304970',
        },
        {
          url: '/images/crypto-icons/zec.svg',
          revision: 'b6d880e4979d09f4a6e2f3e866e96be1',
        },
        {
          url: '/images/crypto-icons/zel.svg',
          revision: '8d71017631650cd845c3115c5a53aa57',
        },
        {
          url: '/images/crypto-icons/zen.svg',
          revision: 'd1de8ac422e480268f63ccc9c1672c61',
        },
        {
          url: '/images/crypto-icons/zest.svg',
          revision: '2250e1e977ab8103ea55d386f9be6759',
        },
        {
          url: '/images/crypto-icons/zil.svg',
          revision: '86c3735c510d5c92507442488d2a700d',
        },
        {
          url: '/images/crypto-icons/zilla.svg',
          revision: '6c3ac6af783b9ae72679f422a84cb6c8',
        },
        {
          url: '/images/crypto-icons/zrx.svg',
          revision: 'bd8c8c3041d8635d495bb8c21add02d7',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: c,
              state: i,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
