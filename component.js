const { join } = require('node:path');
const { mkdir, writeFile, readFile } = require('node:fs/promises');

const dictionary = {
  '@': 'atoms',
  '^': 'molecules',
  '%': 'organisms',
};
const ENTRY_FOLDER = 'app';
const COMPONENT_FOLDER = '_blocks';
const STYLES_FOLDER = '_styles';
const ENTRY_SCSS_FILE = 'main.scss';

async function createComponent() {
  try {
    const args = process.argv;
    // eslint-disable-next-line prefer-const
    let [, , unitName, folderName] = args;

    if (!unitName || !folderName) return;

    unitName = dictionary[unitName];

    const pathToFolder = join(__dirname, ENTRY_FOLDER, COMPONENT_FOLDER, unitName, folderName);
    await mkdir(pathToFolder);

    const data = [
      {
        file: `${folderName}.webc`,
        data: '<!--- template --->',
      },
      {
        file: `${folderName}.js`,
        data: '// script',
      },
      {
        file: `${folderName}.scss`,
        data: '// style',
      },
    ];

    data.forEach(async (item, idx) => {
      // eslint-disable-next-line max-len
      const pathToFile = join(__dirname, ENTRY_FOLDER, COMPONENT_FOLDER, unitName, folderName, item.file);
      await writeFile(pathToFile, item.data);

      if (idx === 2) {
        const pathToEntryScssFile = join(__dirname, ENTRY_FOLDER, STYLES_FOLDER, ENTRY_SCSS_FILE);
        const contentEntryScssFile = await readFile(pathToEntryScssFile, 'utf-8');
        const array = contentEntryScssFile.split('\n');
        const index = array.indexOf(`// ${unitName}`);
        array.splice(index + 1, 0, `@import '../${COMPONENT_FOLDER}/${unitName}/${folderName}/${item.file}';`);
        const newContent = array.join('\n');
        await writeFile(pathToEntryScssFile, newContent);
      }
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

createComponent();
