import dynamic from 'next/dynamic';
import React, { lazy } from 'react';
import Loader from '../loader';

export default function asyncComponent(importComponent: any) {
  return dynamic(importComponent, {
    loading: () => <Loader/>,
  });
}

