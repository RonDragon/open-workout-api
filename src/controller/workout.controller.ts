import { Request, Response } from "express";
import { Workout, Exercise, Wido } from "../model/workout.model";

export let getWorkout = async (req: Request, res: Response) => {
  try {
    const date = req.query;
    console.log("==========================");
    console.log("==========================");
    console.log(date);
    console.log("==========================");
    if(req.query['date']){
        res.send({ rc: 0, desc: "", date });

    }else{
    const workout: Workout = new Workout('zx458sadhkkjefr',"hypertropia", "12/12/2020", [
      new Exercise('pullups',
          [new Wido(1, 8), 
        new Wido(2,7)]
          )]);
          res.send({ rc: 0, desc: "", workout });
        }
  } catch (error) {
    res.status(500).json({ rc: 99, desc: "general error" });
  }
};
export let setWorkout = async (req: Request, res: Response) => {
  try {
      const workout : Workout = req.body.workout
      if(workout.workoutType === null){
        res.status(500).json({ rc: 99, desc: 'workoutType cant be null' });

      }else if(workout.date === null){
        res.status(500).json({ rc: 99, desc: 'date cant be null' });

      }else if(workout.exercises === null || workout.exercises.length <= 0 ){
        res.status(500).json({ rc: 99, desc: 'exercises cant be empty' });

      }else{
        res.send({ rc: 0, desc: "workout created!", workout });
      }
  } catch (error) {
    res.status(500).json({ rc: 99, desc: "general error" });
  }
};
export let updateWorkout = async (req: Request, res: Response) => {
  try {
    const workout : Workout = req.body.workout
    if(workout.workoutType === null){
      res.status(500).json({ rc: 99, desc: 'workoutType cant be null' });

    }else if(workout.date === null){
      res.status(500).json({ rc: 99, desc: 'date cant be null' });

    }else if(workout.exercises === null || workout.exercises.length <= 0 ){
      res.status(500).json({ rc: 99, desc: 'exercises cant be empty' });

    }else{
      res.send({ rc: 0, desc: "workout update successfuly!", workout });
    }
} catch (error) {
  res.status(500).json({ rc: 99, desc: "general error" });
}
};export let deleteWorkout = async (req: Request, res: Response) => {
  try {
    const workout : Workout = req.body['workout']
    if(workout.id === null){
      res.status(500).json({ rc: 99, desc: "general error" }); 
    }else{
      res.send({ rc: 0, desc: "workout deleted successfuly!" });

    }
  } catch (error) {
    res.status(500).json({ rc: 99, desc: "general error" });
  }
};
