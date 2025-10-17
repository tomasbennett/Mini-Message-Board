


const messages = [
    {
        id: 1,
        username: "Ted J. Harper",
        body: `
            I think it was 5, I think I got 5 yeah.
        `,
        time: new Date("1989-04-15")
    },
    {
        id: 2,
        username: "Chris J. Parker",
        body: `
            You think this is bad, this, this chicanery, he's done worse
        `,
        time: new Date("1990-05-13")
    }
];


let id = 3;


const addMessage = (message) => {
    messages.push({
        ...message,
        id: id++
    });
}

const removeMessage = (id) => {
    messages = messages.filter((message) => {
        return message.id !== id
    });
}


const getAllMessages = () => {
    return messages;
}




module.exports = { addMessage, removeMessage, getAllMessages };