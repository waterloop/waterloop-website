declare module "sponsors" {

  export interface SponsorTier {
    id: number;
    type: string;
  }


  export interface Sponsor {
    id: number;
    name: string;
    typeId: SponsorTier['id'];
    joinDate: number;
    website: null;
    contributions: string;
    youtube: string;
    logoDir: string;
  }

}
