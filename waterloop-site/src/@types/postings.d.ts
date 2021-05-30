declare module "postings" {
  export interface PostingShort {
    title: string;
    deadline: number;
    closed: number;
    teamId: number;
    lastUpdated: number;
    id: number;
  }

  export interface PostingShortWithTeamName  {
    teamName: string;
    title: string;
    deadline: number;
    closed: number;
    lastUpdated: number;
    id: number;
  }
  
  type Converted<T> = Omit<T, "teamId" | "deadline" | "lastUpdated"> & { team: string; deadline: Date; lastUpdated: Date; }

  export type PostingShortConverted = Converted<PostingShort>


  export interface PostingLong extends PostingShort {
    location: string;
    termYear: number;
    termSeason: string;
    description: string;
    closed: number;
    timeCommitment: string;
    requirements: Requirement[];
    tasks: Task[];
    info: Info[];
  }
  
  export type PostingLongConverted = Converted<PostingLong>

  export interface Info {
    info: string;
    id: number;
  }

  export interface Requirement {
    requirement: string;
    id: number;
  }

  export interface Task {
    task: string;
    id: number;
  }
}
