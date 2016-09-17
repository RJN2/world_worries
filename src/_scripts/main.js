// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';
import * as d3 from 'd3';
import * as dataMap from 'datamaps';

$(() => {
  new Link(); // Activate Link modules logic
});
