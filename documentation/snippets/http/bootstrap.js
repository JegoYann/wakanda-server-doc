/*
 * A BootStrap is a JavaScript file that is run when your project is loaded on the server.
 * You can use it  to initialize your application, define HTTP pattern handlers etc..
 */

httpServer.addRequestHandler("^/me", "./handler.js", "myHandler");