import trimStart from '../trimStart';

const absoluteUrl = (path) => process.env.MIX_APP_URL + '/' + trimStart(path, '/');

export default absoluteUrl;
