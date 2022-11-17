import openSocket from "socket.io-client";
const DOMAIN = process.env.REACT_APP_DOMAIN;

const socket = openSocket(DOMAIN);

export default socket;
