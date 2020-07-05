import { Exercise, Set } from './../model/workout.model';
import { Request, Response } from "express";
import { Workout } from "../model/workout.model";
import { SocialUser } from "../model/user.model";

export let getUserData = async (req: Request, res: Response)=>{
  try{
    const user : SocialUser = new SocialUser(
      req.query['name'].toString(),
      req.query['email'].toString(),
      req.query['provider'].toString()
    )
    const workouts: Workout = new Workout('4265',
                                         'hypertropia',
                                         new Date().toDateString(),
                                         [new Exercise(1,'pull ups',
                                         [new Set(1,10,0),
                                          new Set(2,9,0),
                                          new Set(3,8,0)],
                                          ),
                                          new Exercise(2,'push ups',
                                          [new Set(1,15,0),
                                           new Set(2,9,0),
                                           new Set(3,5,0)],
                                           )]
                                          )
    console.log(user.provider);
    if(user.provider){
      res.send({ rc: 0, desc: "account linked to " + user.provider + " succesfully!", user,workouts });
    }
  }catch(error){

  }
}

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
