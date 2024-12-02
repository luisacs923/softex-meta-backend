import express from 'express';
import AdminJS from 'adminjs';
import bodyParser from 'body-parser';
import { buildAuthenticatedRouter } from '@adminjs/express';

import ColaboradorController from './controllers/colaborador.js';
import PrestadorController from './controllers/prestador.js';
import ServicoController from './controllers/servico.js';
import MaterialController from './controllers/material.js';
import EpiController from './controllers/epi.js';
import ClienteController from './controllers/cliente.js';
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
  app.use('/prestador', PrestadorController);
  app.use('/servico', ServicoController);
  app.use('/material', MaterialController);
  app.use('/epi', EpiController);
  app.use('/cliente', ClienteController);

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`AdminJS available at http://localhost:${port}${admin.options.rootPath}`);
  });
};

start();
