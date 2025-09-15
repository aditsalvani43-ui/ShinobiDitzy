let mode = "repeat";

function setMode(newMode) {
  mode = newMode;
  document.getElementById("output").innerText = "";
}

function generate() {
  let text = document.getElementById("inputText").value;
  let repeatCount = parseInt(document.getElementById("repeatCount").value);
  let result = "";

  switch (mode) {
    case "repeat":
      result = (text + " ").repeat(repeatCount);
      break;
    case "random":
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < repeatCount * 5; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      break;
    case "letters":
      result = text.split("").map(ch => ch.repeat(2)).join("");
      break;
    case "crazy":
      let crazyChars = ["@", "#", "$", "%", "&", "*", "~", "!", "√", "∆"];
      result = text.split("").map(ch => ch + crazyChars[Math.floor(Math.random() * crazyChars.length)]).join("");
      break;
    case "emoji":
      let emojis = ["😂","😍","🔥","💯","😎","😜","🎉","🤩"];
      result = text + " " + emojis[Math.floor(Math.random() * emojis.length)].repeat(repeatCount);
      break;
    case "blank":
      result = "\u200B".repeat(repeatCount);
      break;
    case "bold":
      const boldMap = {
        "A":"𝗔","B":"𝗕","C":"𝗖","D":"𝗗","E":"𝗘","F":"𝗙","G":"𝗚","H":"𝗛","I":"𝗜","J":"𝗝","K":"𝗞","L":"𝗟","M":"𝗠",
        "N":"𝗡","O":"𝗢","P":"𝗣","Q":"𝗤","R":"𝗥","S":"𝗦","T":"𝗧","U":"𝗨","V":"𝗩","W":"𝗪","X":"𝗫","Y":"𝗬","Z":"𝗭",
        "a":"𝗮","b":"𝗯","c":"𝗰","d":"𝗱","e":"𝗲","f":"𝗳","g":"𝗴","h":"𝗵","i":"𝗶","j":"𝗷","k":"𝗸","l":"𝗹","m":"𝗺",
        "n":"𝗻","o":"𝗼","p":"𝗽","q":"𝗾","r":"𝗿","s":"𝘀","t":"𝘁","u":"𝘂","v":"𝘃","w":"𝘄","x":"𝘅","y":"𝘆","z":"𝘇"
      };
      result = text.split("").map(ch => boldMap[ch] || ch).join("");
      break;
    case "shuffle":
      result = text.split(" ").sort(() => Math.random() - 0.5).join(" ");
      break;
  }

  document.getElementById("output").innerText = result;
}

function copyResult() {
  let result = document.getElementById("output").innerText;
  navigator.clipboard.writeText(result).then(() => {
    alert("Teks berhasil dicopy!");
  });
                                                                   }
