import packageJson from '../../../../../packages/responsive/package.json';

const version = `v${packageJson.version.replace(/\./g, '․')}`;
export default (name: string): string => `Repsonsive ${version}/${name}`;
