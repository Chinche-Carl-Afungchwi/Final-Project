// src/controllers/link.controller.ts
import { Request, Response } from 'express';
import prisma from '../prisma';
import { nanoid } from 'nanoid';

// Create a new link for the authenticated user
export const createLink = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id;
    const slug = nanoid(8);

    const newLink = await prisma.link.create({
      data: {
        slug,
        userId,
      },
      include: {
        user: true,
      },
    });

    res.status(201).json({
      id: newLink.id,
      slug: newLink.slug,
      createdAt: newLink.createdAt,
      messages: [],
      user: {
        username: newLink.user.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

// Get all links for the logged-in user
export const getUserLinks = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any).user.id;

    const links = await prisma.link.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        messages: true,
      },
    });

    res.status(200).json(links);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch links.' });
  }
};

// Delete a link and its messages
export const deleteLink = async (req: Request, res: Response): Promise<void> => {
  const userId = (req as any).user.id;
  const { id } = req.params;

  try {
    const link = await prisma.link.findUnique({ where: { id } });

    if (!link || link.userId !== userId) {
      res.status(404).json({ message: 'Link not found or unauthorized' });
      return;
    }

    await prisma.message.deleteMany({ where: { linkId: id } });
    await prisma.link.delete({ where: { id } });

    res.status(200).json({ message: 'Link and messages deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get link info by slug (for public leave message page)
export const getLinkBySlug = async (req: Request, res: Response): Promise<void> => {
  const { slug } = req.params;

  try {
    const link = await prisma.link.findUnique({
      where: { slug },
      include: {
        user: true,
      },
    });

    if (!link) {
      res.status(404).json({ message: 'Link not found' });
      return;
    }

    res.status(200).json({ username: link.user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
