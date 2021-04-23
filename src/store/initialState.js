let url = window.location.href;
url = url.substring(url.indexOf("?") + 1);

export default {
  exampleData: {
    sayHi: "Hello",
  },
  envData: {
    isTestEnv:
      url.includes("stage") || url.includes("dev") || url.includes("ngrok"),
  },
};
