export type TTopicLink = {
  title: string;
  link: string;
};

export type TSectionCardProps = {
  title: string;
  topics?: TTopicLink[];
  link: string;
  description?: string;
};
