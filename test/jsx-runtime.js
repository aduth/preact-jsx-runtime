import babel from '@babel/core';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promises as fs } from 'fs';
import chai from 'chai';

const { expect } = chai;
const __dirname = dirname(fileURLToPath(import.meta.url));

describe('preact-jsx-runtime', () => {
  it('transforms', async () => {
    const [code, expected] = await Promise.all(
      ['in', 'out'].map((basename) =>
        fs.readFile(join(__dirname, 'fixtures', basename + '.js'), 'utf8')
      )
    );
    const result = await babel.transformAsync(code, {
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
            importSource: 'preact-jsx-runtime',
          },
        ],
      ],
    });

    expect(result.code).to.equal(expected);
  });

  it('runs', async () => {
    const [expected, { default: output }] = await Promise.all([
      fs.readFile(join(__dirname, 'fixtures/out.txt'), 'utf8'),
      import('./fixtures/out.js'),
    ]);

    expect(output).to.equal(expected);
  });
});
