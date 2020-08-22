export default (text: string) => (text && typeof text === 'string') ? text.replace(/&(?!#?[a-z0-9]+;)/, '&amp;') : '';
