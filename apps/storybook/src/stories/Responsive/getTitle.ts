import packageJson from '@react-stuff/responsive/package.json';

const version = `v${packageJson.version.replace(/\./g, '․')}`;

export default (name: string): string =>
  `@react-stuff/responsive ${version}/${name}`;
