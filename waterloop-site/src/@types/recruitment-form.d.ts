declare module 'recruitment-form' {
  export interface RecruitmentForm {
    postingId: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    term: string;
    termType: string;
    program: string;
    inPerson: boolean;
    whyJoin: string;
    technicalQ: string;
    additionalInfo: string;
    resumeLink: string;
  }
}
