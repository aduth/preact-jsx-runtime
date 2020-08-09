const babel = require('@babel/core');
const { join } = require('path');
const fs = require('fs').promises;
const { expect } = require('chai');

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
        '@babel/preset-env',
      ],
    });

    expect(result.code).to.equal(expected);
  });

  it('runs', async () => {
    const expected = await fs.readFile(
      join(__dirname, 'fixtures/out.txt'),
      'utf8'
    );
    const output = require('./fixtures/out');

    expect(output).to.equal(expected);
  });
});
