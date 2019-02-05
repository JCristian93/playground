import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

const Loading = () => (
  <div style={{
    width: '1000px',
    height: '1000px',
    backgroundColor: 'red'
  }}>
    Loading
  </div>
)

const Login = Loadable({
  loader: () => import('../screens/login'),
  loading: Loading
})

const About = Loadable({
  loader: () => import('../screens/about'),
  loading: Loading
})

export const publicRoutes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/',
    render: () => (<Redirect to='/about'/>),
  },
];

export const privateRoutes = {

}