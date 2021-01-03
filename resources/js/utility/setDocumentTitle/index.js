import defineDocumentTitle from '../defineDocumentTitle';

const setDocumentTitle = (text, separator = ' - ') => {
  document.title = defineDocumentTitle(text, separator);
};

export default setDocumentTitle;
