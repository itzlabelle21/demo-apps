/** Connect to Moralis server */
const serverUrl = "https://dzdfmwoloqps.usemoralis.com:2053/server";
const appId = "w5CYNEk0LBdCYIgIEqUm2CZpxImzwlwGmuPR1fEv";
Moralis.start({
  serverUrl,
  appId,
});

/** Add from here down */
async function login() {
  let user = Moralis.User.current();
  if (!user) {
    const authOptions = {
      provider: "walletconnect",
      signingMessage: "Hello World!",
      chainId: 56,
    };
    user = await Moralis.authenticate(authOptions)
      .then(function (user) {
        console.log("logged in user:", user);
        console.log(user.get("0x6a164122d5cf7c840D26e829b46dCc4ED6C0ae48"));
      })
      .catch(function (error) {
        console(error);
      });
  }
}

async function logOut() {
  await Moralis.User.logOut();
  console.log("logged out");
}

document.getElementById("btn-login").onclick = login;
document.getElementById("btn-logout").onclick = logOut;

/** Useful Resources  */

// https://docs.moralis.io/moralis-server/users/crypto-login
// https://docs.moralis.io/moralis-server/getting-started/quick-start#user
// https://docs.moralis.io/moralis-server/users/crypto-login#walletconnect

/** Moralis Forum */

// https://forum.moralis.io/
