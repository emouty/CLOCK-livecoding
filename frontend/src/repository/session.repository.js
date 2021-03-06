import agent from '../services/http';

const getUrl = '/api/sessions';
const createUrl = '/api/sessions';

export async function reqCreateSession(userId) {
    console.log("Creating session");
    const req = agent.online.post(createUrl).send({creatorid: userId});
    try {
        const { body } = await req;
        console.log(body);
        return body;
    } catch(err) {
      console.error(err);
    }
};

export async function reqGetSession(sessionId, userId) {
    console.log("Getting session: " + sessionId + " with user: " + userId);
    const req = agent.local.get(getUrl + "/" + sessionId + "/" + userId);
    try {
        const { body } = await req;
        console.log(body);
        return body;
    } catch(err) {
      console.error(err);
    }
};
