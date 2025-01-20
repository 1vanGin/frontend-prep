import React from 'react';

export type LayoutProps = {
  children: React.ReactNode;
};

export type MenuItem = {
  text: string;
  icon: React.ReactElement;
  path: string;
};
