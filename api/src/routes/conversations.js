const express = require('express');
const ConversationsService = require('./../services/conversations');

const conversationsApi = (app) => {
  const router = express.Router();
  app.use('/api/conversations/', router);

  const conversationsService = new ConversationsService();

  router.get('/', async (req, res, next) => {
    try {
      const data = await conversationsService.getConversations();
      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

};

module.exports = conversationsApi;