function requireAuth(userId) {
  if (!userId) {
    throw new Error('Unauthorized');
  }
}

const Query = {
  messages: (_root, _args, {userId}) => {
    requireAuth(userId);
    // return db.messages.list();
    return [];
  }
}

const Mutation = {
  addMessage: (_root, {input}, {userId}) => {
    requireAuth(userId);
    const messageId = db.messages.create({from: userId, text: input.text});
    // return db.messages.get(messageId);
    return {};
  }
}

module.exports = { Query, Mutation };
