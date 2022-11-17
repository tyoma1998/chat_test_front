import openSocket from "socket.io-client";
const DOMAIN = process.env.REACT_APP_DOMAIN;

const socket = openSocket(DOMAIN, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

export default socket;
