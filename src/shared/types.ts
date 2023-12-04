export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "outclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export type ClassType = {
  name: string;
  description?: string;
  image: string;
};
