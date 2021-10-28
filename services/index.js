import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const getEnv = (name) => publicRuntimeConfig.env[name];
