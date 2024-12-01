import express from 'express';
import AdminJS from 'adminjs';
import bodyParser from 'body-parser';
import { buildAuthenticatedRouter } from '@adminjs/express';

import ColaboradorController from './controllers/colaborador.js';
import MaterialController from './controllers/material.js';
import provider from './admin/auth-provider.js';
import options from './admin/options.js';

const port = process.env.PORT || 3000;

const start = async () => {
  const app = express();

  const admin = new AdminJS(options);

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    },
  );

  app.use(admin.options.rootPath, router);
  app.use(bodyParser.json());
  app.use('/colaborador', ColaboradorController);

  app.use('/material', MaterialController);

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
