import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Brevi',
    path: '#',
    icon: '',
    cName: 'nav-title'
  },
  {
    title: 'Buses',
    path: '/admin/buses',
    icon: <FaIcons.FaBus />,
    cName: 'nav-text'
  },
  {
    title: 'Rutas',
    path: '/admin/rutas',
    icon: <FaIcons.FaRoute />,
    cName: 'nav-text'
  },
  {
    title: 'Seguimiento',
    path: '/admin/rastreoBuses',
    icon: <FaIcons.FaMapMarkerAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Consulta',
    path: '/admin/consulta',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  }
];
