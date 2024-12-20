import Application from 'your-app-name/app';
import { setApplication } from '@ember/test-helpers';
import config from './config/environment';
import { start } from 'ember-cli-test-loader';
import { initialize } from 'ember-dependency-lookup';

setApplication(Application.create(config.APP));

start();
