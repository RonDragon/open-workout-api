import { Request, Response } from "express";
import { Workout, Exercise, Wido, UserData } from "../model/workout.model";

export let getUserData = async (req: Request, res: Response) => {
  try {
    const token = req.query['token'];
    console.log("==========================");
    console.log("==========================");
    console.log(token);
    console.log("==========================");
    if(req.query['token']){
        res.send({ rc: 0, desc: "", token });

    }else{
    const userData: UserData = new UserData('zx458sadhkkjefr',[new Workout( 'fddsfdsgdgd',"hypertropia", "12/12/2020", [
      new Exercise('pullups',
          [new Wido(1, 8), 
        new Wido(2,7)]
          )])]);
          res.send({ rc: 0, desc: "", userData });
        }
  } catch (error) {
    res.status(500).json({ rc: 99, desc: "general error" });
  }
};
export let addWorkout = async (req: Request, res: Response) => {
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
