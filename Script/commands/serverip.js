// commands/serverip.js
module.exports = {
  name: "serverip",
  description: "Alternate command for showing server IP",
  execute(message, args) {
    message.reply(
`# Join Our Server!

# Server Address :

⟶ Java :
IP ➜ rg.mcpe.nl

⟶ Bedrock :
IP ➜ rg.mcpe.nl
Port ➜ 25666`
    );
  }
}
