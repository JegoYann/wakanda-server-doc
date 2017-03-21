exports.writeSession = function writeSession(session) {
	console.log(session.userName + " logged-in at " + new Date());

	var sessionInfo = JSON.stringify(session);
	storage[session.sessionID] = sessionInfo;
	return true;
}

exports.removeSession = function removeSession(session) {
	console.log(session.userName + " logged-out at " + new Date());

	var sessionID = session.sessionID;
	storage[sessionID] = undefined;
	return true;
}

exports.readSession = function readSession(session) {
	var sessionID = session.sessionID;
	var sessionInfo = storage[sessionID];

	if (sessionInfo === undefined) {
		return false;
	}

	sessionInfo = JSON.parse(sessionInfo);
	session.userID = sessionInfo.userID;
	session.lifeTime = sessionInfo.lifeTime;
	session.expiration = new Date(sessionInfo.expiration);
	session.userName = sessionInfo.userName;
	return true;
}