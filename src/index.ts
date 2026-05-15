import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for JSX / TSX (.jsx .tsx)
 *
 * - Declaration: `let end=null;`
 * - Ruby mode: enabled
 */
const plugin: IndentierPlugin = {
  extensions: ['.jsx', '.tsx'],
  rubyCompatible: true,
  declarationTemplate: 'let end=null;',
};

export default plugin;
