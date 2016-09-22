// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Datamap from 'datamaps';

$(() => {
  new Link(); // Activate Link modules logic

  new Datamap({
    element: document.getElementById('globalMap'),
    projection: 'mercator',
    responsive: true,
    fills: {
      defaultFill: 'rgba(255,255,255,1.0)'
    },
    geographyConfig: {
      borderColor: 'rgba(0,0,0,1.0)'
    }
  });
});
