import { Router } from "express";

import taskRouter from "./features/task/task.router";
import scheduleRouter from "./features/schedule/schedule.router";

const router = Router();

router.use('/task', taskRouter);
router.use('/schedule', scheduleRouter);

export default router;