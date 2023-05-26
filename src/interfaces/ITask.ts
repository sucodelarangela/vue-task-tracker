import IProject from './IProject';

export default interface ITask {
  durationInSeconds: number;
  description: string;
  project: IProject;
}

// this interface represents a Task and its types
