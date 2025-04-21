import { Request, Response } from 'express';
import prisma from '../prisma';

// POST /api/messages/:slug
export const sendMessage = async (req: Request, res: Response): Promise<Response> => {
  const { slug } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: 'Message content is required.' });
  }

  try {
    const link = await prisma.link.findUnique({ where: { slug } });

    if (!link) {
      return res.status(404).json({ message: 'Link not found.' });
    }

    const message = await prisma.message.create({
      data: {
        content,
        linkId: link.id,
      },
    });

    return res.status(201).json(message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

// GET /api/messages/:slug
export const getMessages = async (req: Request, res: Response): Promise<Response> => {
  const { slug } = req.params;

  try {
    const link = await prisma.link.findUnique({
      where: { slug },
      include: { messages: true },
    });

    if (!link) {
      return res.status(404).json({ message: 'Link not found.' });
    }

    return res.status(200).json(link.messages);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};

export const deleteMessage = async (req: Request, res: Response): Promise<void> => {
    const userId = (req as any).user.id;
    const { id } = req.params;
  
    try {
      // Get the message and its link
      const message = await prisma.message.findUnique({
        where: { id },
        include: { link: true }
      });
  
      if (!message || message.link.userId !== userId) {
        res.status(404).json({ message: 'Message not found or unauthorized' });
        return;
      }
  
      await prisma.message.delete({ where: { id } });
  
      res.status(200).json({ message: 'Message deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  };
  