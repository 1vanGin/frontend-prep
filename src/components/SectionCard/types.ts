export type TopicLink = {
  title: string;
  link: string;
};

export type SectionCardProps = {
  title: string;
  topics?: TopicLink[];
  link: string;
  description?: string;
};
