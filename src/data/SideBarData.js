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
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Rutas',
    path: '/admin/rutas',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Seguimiento',
    path: '/admin/rastreoBuses',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Consulta',
    path: '/admin/consulta',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];
