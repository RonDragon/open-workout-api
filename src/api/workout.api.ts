import * as express from "express";
import { getWorkout, setWorkout, updateWorkout, deleteWorkout } from "../controller/workout.controller";


const router = express.Router();

router.get('/getWorkout',getWorkout);
router.get('/getWorkout/:date',getWorkout);
router.post('/setWorkout',setWorkout);
router.post('/updateWorkout',updateWorkout);
router.delete('/deleteWorkout',deleteWorkout);

module.exports = router;
