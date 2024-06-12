import { Router } from 'express';
import { getFeedback, postFeedback } from '../controllers/feedbackController';

const router = Router();

router.get('/', getFeedback);
router.post('/', postFeedback);

export default router;
