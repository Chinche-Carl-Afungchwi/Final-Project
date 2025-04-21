// src/routes/link.routes.ts
import { Router } from 'express';
import { 
  createLink, 
  getUserLinks, 
  deleteLink, 
  getLinkBySlug // 
} from '../controllers/link.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// Authenticated routes
router.post('/', authenticate, createLink);
router.get('/my', authenticate, getUserLinks);
router.delete('/:id', authenticate, deleteLink);

// Public route to get link info by slug
router.get('/:slug', getLinkBySlug); 

export default router;
