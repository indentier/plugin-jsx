import { describe, expect, it } from 'vitest';
import { format, resolveOptions, registerPlugin, clearPlugins } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-jsx', () => {
  it('registers .jsx and .tsx extensions', () => {
    expect(plugin.extensions).toContain('.jsx');
    expect(plugin.extensions).toContain('.tsx');
  });

  it('is ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(true);
  });

  it('formats a JSX file with ruby mode: let end=null; declaration at top', () => {
    clearPlugins();
    registerPlugin(plugin);

    const input = 'function App() {\n  return (\n    <div>hello</div>\n  );\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.jsx',
      plugin,
    );

    expect(out).toContain('let end=null;');
    expect(out.split('\n').some((l) => l.trim() === 'end')).toBe(true);
    expect(out.split('\n')[0]!.trim()).toBe('let end=null;');

    clearPlugins();
  });

  it('formats a TSX file with ruby mode', () => {
    const input = 'function App(): JSX.Element {\n  return <div>hello</div>;\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.tsx',
      plugin,
    );

    expect(out).toContain('let end=null;');
    expect(out.split('\n').some((l) => l.trim() === 'end')).toBe(true);
  });

  it('idempotent: formatting twice gives the same result', () => {
    const input = 'function App() {\n  return (\n    <div>hello</div>\n  );\n}\n';
    const opts = resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 });
    const first = format(input, opts, '.jsx', plugin);
    const second = format(first, opts, '.jsx', plugin);
    expect(second).toBe(first);
  });
});
