import React from 'react';
import { MadoContentId } from '../../../store/mado';

export const ContentsMap: { [key in MadoContentId]: React.LazyExoticComponent<any> } = {
  profile: React.lazy(() => import(/* webpackChunkName: "profile" */ './Profile/Profile')),
  links: React.lazy(() => import(/* webpackChunkName: "links" */ './Links/Links')),
  twitter: React.lazy(() => import(/* webpackChunkName: "twitter" */ './Twitter/Twitter')),
};
