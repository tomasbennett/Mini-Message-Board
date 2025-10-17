const { addMessage, removeMessage, getAllMessages } = require("../models/messageModels");


exports.newMessageCreatedPOST = (req, res) => {
    const { username, body } = req.body;

    if (!username || typeof username !== "string" || username.trim().length === 0) {
        return res.status(400).json({
            error: "Invalid 'username' field. It must be a non-empty string."
        });
    }

    if (!body || typeof body !== "string" || body.trim().length === 0) {
        return res.status(400).json({
            error: "Invalid 'body' field. It must be a non-empty string."
        });
    }

    addMessage({
        username,
        time: new Date(),
        body
    });

    res.redirect("/");
};


exports.showAllMessages = (request, response) => {
    response.render("index", { pageTitle: "Home", messages: getAllMessages() });
}


exports.createNewMessageForm = (request, response) => {
    response.render("new", { pageTitle: "New Message" });
}