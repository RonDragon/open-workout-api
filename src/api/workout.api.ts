import * as express from "express";
import {  addWorkout, updateWorkout, deleteWorkout, getUserData } from "../controller/workout.controller";


const router = express.Router();

router.get('/getUserData',getUserData);
router.post('/addWorkout',addWorkout);
router.post('/updateWorkout',updateWorkout);
router.delete('/deleteWorkout',deleteWorkout);

module.exports = router;
