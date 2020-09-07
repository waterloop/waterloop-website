import { ProfileType, Contact } from "../interfaces";
import Text from "static/copy/Team/descriptions.json";

export type ContactsType = {
  contacts: Contact[];
};

export type Descriptions = {
  [key: string]: string;
  Web: string;
  Electrical: string;
  TeamLeads: string;
  Admin: string;
  Exec: string;
  Mechanical: string;
  Infrastructure: string;
};
export interface PSectionProps {
  title: string | keyof typeof Text;
  profiles: ProfileType[];
  profileType: string;
}
