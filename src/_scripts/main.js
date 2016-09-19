// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import Datamap from 'datamaps';

$(() => {
  new Link(); // Activate Link modules logic
  new Datamap({element: document.getElementById('globalMap')});
});
