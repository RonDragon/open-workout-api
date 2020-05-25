import { SocialUser } from "./user.model";


export class UserData {
  constructor(public user: SocialUser, public workouts: Workout[]) {}
}

export class Workout {
  constructor(
    public id: string,
    public workoutType: string,
    public date: string,
    public exercises: Exercise[]
  ) {}
}
export class Exercise {
  constructor(public exerciseName: string, public wido: Wido[]) {}
}

export class Wido {
  constructor(public setNum: number, public rep: number) {}
}
