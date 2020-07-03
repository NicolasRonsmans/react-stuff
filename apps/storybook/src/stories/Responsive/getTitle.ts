import packageJson from '../../../package.json';

const version = `v${packageJson.dependencies['@react-stuff/responsive'].replace(
  /\./g,
  '․'
)}`;

export default (name: string): string =>
  `@react-stuff/responsive ${version}/${name}`;
