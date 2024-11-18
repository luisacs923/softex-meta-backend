import { Database, Resource } from '@adminjs/prisma';
import { PrismaClient } from '@prisma/client';
import AdminJS from 'adminjs';

const prisma = new PrismaClient();

AdminJS.registerAdapter({ Database, Resource });

export default prisma;
