const yts = require("youtube-yts");
const axios = require("axios");

let mergedCommands = [
  "play",
  "song",
  "ytmp3",
  "mp3",
  "ytaudio",
  "yta",
  "ytmp4",
  "mp4",
  "ytvideo",
  "ytv",
  "video",
];

module.exports = {
  name: "mediaDownloader",
  alias: [...mergedCommands],
  uniquecommands: ["song", "video", "ytmp3", "ytmp4"],
  description: "All file dowloader commands",
  start: async (Atlas, m, { inputCMD, text, doReact, prefix, pushName }) => {
    switch (inputCMD) {
      case "play":
      case "song": {
        if (!text) {
          await doReact("❌");
          return m.reply(
            `Please provide a song name !\n\nExample: *${prefix}song despacito*`
          );
        }
        await doReact("📥");
        thumbAtlas = "https://graph.org/file/d0a287fa875c809f234ce.jpg";
        songInfo = await yts(text);
        song = songInfo.videos[0];
        videoUrl = song.url;
        videoId = videoUrl.split("v=")[1];

        await Atlas.sendMessage(
          m.from,
          {
            image: { url: song.thumbnail },
            caption: `\nDownloading: *${song.title}*
            
_🕛 Duration:_ *${song.timestamp}*

_🎀 Channel Name:_ *${song.author.name}*

_🏮 Video Uploaded:_ *${song.ago}*\n`,
          },
          { quoted: m }
        );

                    const { data } = await axios.get(`https://www.aeonsan.xyz/api/dl/yt?query=${videoId}&format=mp3`,{
                timeout: 60000,
                validateStatus: (status) => status < 500
            });

                                    if (!data || !data.success) {
                          return m.reply(
            `Something went wrong`
          );
            }

await Atlas.sendMessage(
                m.from,
                {
                    audio: { url: data.download.downloadUrl },
                    mimetype: 'audio/mpeg',
                    ptt: false
                },
                { quoted: m }
            );
          }

        break;

      case "ytmp3":
      case "mp3":
      case "ytaudio":{
                if (
          !text ||
          (!text.includes("youtube.com/watch?v=") &&
            !text.includes("youtu.be/"))
        ) {
          await doReact("❌");
          return m.reply(
            `Please provide a valid YouTube Video link to download as audio!\n\nExample: *${prefix}mp3 put_link*`
          );
        }
        await doReact("📥");
        songInfo = await yts(text);
        song = songInfo.videos[0];
        videoUrl = song.url;
        videoId = videoUrl.split("v=")[1];
        thumbAtlas = "https://graph.org/file/d0a287fa875c809f234ce.jpg";

        await Atlas.sendMessage(
          m.from,
          {
            image: { url: song.thumbnail },
            caption: `\nDownloading: *${song.title}*
            
_🕛 Duration:_ *${song.timestamp}*

_🎀 Channel Name:_ *${song.author.name}*

_🏮 Video Uploaded:_ *${song.ago}*\n`,
          },
          { quoted: m }
        );

                    const { data } = await axios.get(`https://www.aeonsan.xyz/api/dl/yt?query=${videoId}&format=mp3`,{
                timeout: 60000,
                validateStatus: (status) => status < 500
            });

                        if (!data || !data.success) {
                          return m.reply(
            `Something went wrong`
          );
            }

await Atlas.sendMessage(
                m.from,
                {
                    audio: { url: data.download.downloadUrl },
                    mimetype: 'audio/mpeg',
                    ptt: false
                },
                { quoted: m }
            );
      }

        break;

      case "ytmp4":
      case "mp4":
      case "ytvideo": {
                if (
          !text ||
          (!text.includes("youtube.com/watch?v=") &&
            !text.includes("youtu.be/"))
        ) {
          await doReact("❌");
          return m.reply(
            `Please provide a valid YouTube Video link to download as audio!\n\nExample: *${prefix}mp4 put_link*`
          );
        }
        await doReact("📥");
        songInfo = await yts(text);
        song = songInfo.videos[0];
        videoUrl = song.url;
        videoId = videoUrl.split("v=")[1];
        result = await yts(videoId);

        await Atlas.sendMessage(
          m.from,
          {
            image: { url: song.thumbnail },
            caption: `\nDownloading: *${song.title}*
            
_🕛 Duration:_ *${song.timestamp}*

_🎀 Channel Name:_ *${song.author.name}*

_🏮 Video Uploaded:_ *${song.ago}*\n`,
          },
          { quoted: m }
        );
                    const { data } = await axios.get(`https://www.aeonsan.xyz/api/dl/yt?query=${videoId}&format=720`,{
                timeout: 60000,
                validateStatus: (status) => status < 500
            });

                        if (!data || !data.success) {
                          return m.reply(
            `Something went wrong`
          );
            }

await Atlas.sendMessage(
          m.from,
          {
            video: { url: data.download.downloadUrl },
            caption: `${song.title} By: *${botName}*`,
          },
          { quoted: m }
        );


      }
        break;

      case "video": {
                if (!text) {
          await doReact("❌");
          return m.reply(
            `Please provide an YouTube video name !\n\nExample: *${prefix}video dandilions*`
          );
        }
        await doReact("📥");

        songInfo = await yts(text);
        song = songInfo.videos[0];
        videoUrl = song.url;
        videoId = videoUrl.split("v=")[1];

        await Atlas.sendMessage(
          m.from,
          {
            image: { url: song.thumbnail },
            caption: `\nDownloading: *${song.title}*
            
_🕛 Duration:_ *${song.timestamp}*

_🎀 Channel Name:_ *${song.author.name}*

_🏮 Video Uploaded:_ *${song.ago}*\n`,
          },
          { quoted: m }
        );

                    const { data } = await axios.get(`https://www.aeonsan.xyz/api/dl/yt?query=${videoId}&format=720`,{
                timeout: 60000,
                validateStatus: (status) => status < 500
            });

                        if (!data || !data.success) {
                          return m.reply(
            `Something went wrong`
          );
            }

await Atlas.sendMessage(
          m.from,
          {
            video: { url: data.download.downloadUrl },
            caption: `${song.title} By: *${botName}*`,
          },
          { quoted: m }
        );
      }

        break;

      case "yts":
      case "ytsearch":
        if (!args[0]) {
          await doReact("❌");
          return m.reply(`Please provide a search term!`);
        }
        await doReact("📥");
        let search = await yts(text);
        let thumbnail = search.all[0].thumbnail;
        let num = 1;

        var txt = `*🏮 YouTube Search Engine 🏮*\n\n_🧩 Search Term:_ *${args.join(
          " "
        )}*\n\n*📌 Total Results:* *${search.all.length}*\n`;

        for (let i of search.all) {
          txt += `\n_Result:_ *${num++}*\n_🎀 Title:_ *${
            i.title
          }*\n_🔶 Duration:_ *${i.timestamp}*\n_🔷 Link:_ ${i.url}\n\n`;
        }

        let buttonMessage = {
          image: { url: thumbnail },
          caption: txt,
        };

        Atlas.sendMessage(m.from, buttonMessage, { quoted: m });
        break;

      default:
        break;
    }
  },
};
