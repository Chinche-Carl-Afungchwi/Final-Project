// src/routes/message.routes.ts
import { Router, Request, Response } from 'express';
import { authenticate } from '../middlewares/auth.middleware';

import { sendMessage, getMessages, deleteMessage } from '../controllers/message.controller';

const router = Router();

// Send a message to a link
router.post('/:slug', (req: Request, res: Response) => {
  sendMessage(req, res);
});

// Get messages for a link
router.get('/:slug', (req: Request, res: Response) => {
  getMessages(req, res);
});

router.delete('/:id', authenticate, deleteMessage);
export default router;
