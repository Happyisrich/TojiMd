(function(_0x1ae898,_0x1c445b){const _0x213b1a=_0x429b,_0x5713cc=_0x1ae898();while(!![]){try{const _0x3ad166=parseInt(_0x213b1a(0x83))/0x1+parseInt(_0x213b1a(0x98))/0x2+-parseInt(_0x213b1a(0x8f))/0x3+parseInt(_0x213b1a(0x71))/0x4+parseInt(_0x213b1a(0x72))/0x5+parseInt(_0x213b1a(0x80))/0x6*(-parseInt(_0x213b1a(0x96))/0x7)+-parseInt(_0x213b1a(0x7d))/0x8;if(_0x3ad166===_0x1c445b)break;else _0x5713cc['push'](_0x5713cc['shift']());}catch(_0x577b1d){_0x5713cc['push'](_0x5713cc['shift']());}}}(_0x3d64,0x6d259));function _0x3d64(){const _0x3a88fa=['API\x20call\x20failed.','107975lGTFai','Error\x20processing\x20message:','28070YGqIde','pollUpdateMessage','An\x20error\x20occurred\x20while\x20processing\x20your\x20message.','fromMe','owner','1561412POXkGV','4191040FyRMhi','I\x27m\x20sorry,\x20I\x20couldn\x27t\x20process\x20your\x20request.','chats','system','No\x20suitable\x20response\x20from\x20the\x20API.','POST','log','Processing\x20message\x20from\x20user\x20or\x20owner.','user','protocolMessage','GPT-3\x20response:','5388456QdCneY','message','Received\x20message\x20object:','222FDEBtI','https://api.yanzbotz.live/api/ai/gpt3','Irrelevant\x20message\x20type,\x20skipping.','710058RKagUt','text','stringify','error','reply','This\x20is\x20SILVA\x20CHATBOT\x20with\x20a\x20lot\x20of\x20features.\x20Respond\x20with\x20heart\x20emojis\x20in\x20every\x20reply...','chat','chatbot','sender','isBaileys','reactionMessage','json','783921PkLWjG','data','mtype','application/json','Replied\x20with:','result'];_0x3d64=function(){return _0x3a88fa;};return _0x3d64();}import _0x1f7085 from'node-fetch';function _0x429b(_0x1f18e2,_0x501e10){const _0x3d640f=_0x3d64();return _0x429b=function(_0x429b37,_0x2d778c){_0x429b37=_0x429b37-0x71;let _0x5e96f5=_0x3d640f[_0x429b37];return _0x5e96f5;},_0x429b(_0x1f18e2,_0x501e10);}export async function before(_0xd885a0,{conn:_0x18989b}){const _0x5c066e=_0x429b;console['log']('Chatbot\x20feature\x20is\x20active.');try{console[_0x5c066e(0x78)](_0x5c066e(0x7f),JSON[_0x5c066e(0x85)](_0xd885a0,null,0x2));if(_0xd885a0[_0x5c066e(0x8c)]||_0xd885a0[_0x5c066e(0x9b)])return console[_0x5c066e(0x78)]('Message\x20from\x20bot\x20itself\x20or\x20Baileys,\x20skipping.'),!![];const _0x10dc7b=[_0x5c066e(0x7b),_0x5c066e(0x99),_0x5c066e(0x8d),'stickerMessage'];if(_0x10dc7b['includes'](_0xd885a0[_0x5c066e(0x91)]))return console[_0x5c066e(0x78)](_0x5c066e(0x82)),!![];if(!_0xd885a0[_0x5c066e(0x84)])return console[_0x5c066e(0x78)]('No\x20text\x20in\x20the\x20message.'),!![];const _0x4e638f=global['db'][_0x5c066e(0x90)][_0x5c066e(0x74)][_0xd885a0[_0x5c066e(0x89)]]||{},_0x829c6c=_0x4e638f[_0x5c066e(0x8a)]||![],_0x19bdfa=global[_0x5c066e(0x9c)][0x0];if(_0x829c6c||_0xd885a0[_0x5c066e(0x8b)]===_0x19bdfa){console['log'](_0x5c066e(0x79));const _0x5d7eac=encodeURIComponent(_0xd885a0[_0x5c066e(0x84)]);console[_0x5c066e(0x78)]('Message\x20to\x20process:',_0x5d7eac);const _0xa6ed30=async _0x5b52d8=>{const _0x277346=_0x5c066e;try{const _0xcc88cb={'role':_0x277346(0x75),'content':_0x277346(0x88)},_0x270d84={'role':_0x277346(0x7a),'content':_0x5b52d8},_0x5320cd=[_0xcc88cb,_0x270d84],_0x57a5d2=await _0x1f7085(_0x277346(0x81),{'method':_0x277346(0x77),'headers':{'Accept':_0x277346(0x92),'Content-Type':_0x277346(0x92)},'body':JSON[_0x277346(0x85)]({'messages':_0x5320cd})});if(!_0x57a5d2['ok'])throw new Error(_0x277346(0x95));const _0x4b314e=await _0x57a5d2[_0x277346(0x8e)]();return console[_0x277346(0x78)](_0x277346(0x7c),_0x4b314e),_0x4b314e[_0x277346(0x94)];}catch(_0x4fd4db){return console[_0x277346(0x86)]('Error\x20during\x20GPT-3\x20API\x20request:',_0x4fd4db[_0x277346(0x7e)]),_0x277346(0x73);}},_0x15a780=await _0xa6ed30(_0xd885a0[_0x5c066e(0x84)]);_0x15a780?(await _0xd885a0[_0x5c066e(0x87)](_0x15a780),console[_0x5c066e(0x78)](_0x5c066e(0x93),_0x15a780)):(await _0xd885a0[_0x5c066e(0x87)]('No\x20suitable\x20response\x20from\x20the\x20API.'),console[_0x5c066e(0x78)](_0x5c066e(0x76)));}else console[_0x5c066e(0x78)]('Chatbot\x20is\x20not\x20enabled\x20for\x20this\x20chat,\x20skipping.');}catch(_0x142498){console[_0x5c066e(0x86)](_0x5c066e(0x97),_0x142498[_0x5c066e(0x7e)]),await _0xd885a0[_0x5c066e(0x87)](_0x5c066e(0x9a));}return!![];}