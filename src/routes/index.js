const { Router } = require('express');

const router = Router();

router.get('/health', (_, res) => res.status(200).json({ status: 'up' }));

module.exports = router;
