import { RouteProps as ReactDOMRouterProps } from 'react-router-dom';
import * as pages from '../pages/index';

interface RouteProps extends ReactDOMRouterProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  title: string;
}

export const publicRouteList: RouteProps[] = [
  {
    path: '/login',
    component: pages.Login,
    exact: true,
    title: 'Login',
  },
  {
    path: '/register',
    component: pages.Register,
    exact: true,
    title: 'Cadastro',
  },
  { // Mudar depois para rota privada
    path: '/main',
    component: pages.Main,
    exact: true,
    title: 'Principal',
  },
  { // Mudar depois para rota privada
    path: '/configurations',
    component: pages.Configurations,
    exact: true,
    title: 'Configuração',
  },
  { // Mudar depois para rota privada
    path: '/scheduler',
    component: pages.Scheduler,
    exact: true,
    title: 'Agendamento',
  },
  { // Mudar depois para rota privada
    path: '/geral',
    component: pages.Geral,
    exact: true,
    title: 'Agendamentos',
  },
];
