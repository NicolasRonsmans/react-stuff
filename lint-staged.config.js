module.exports = {
  'packages/header/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @react-stuff/header lint'],
  'packages/responsive/{*.{js,json,md},src/**/*.{ts,tsx}}': [
    'prettier --write',
    'yarn workspace @react-stuff/responsive lint',
  ],
  'packages/utils/{*.{js,json,md},src/**/*.{ts,tsx}}': ['prettier --write', 'yarn workspace @react-stuff/utils lint'],
};
