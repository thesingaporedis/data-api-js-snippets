import inquirer from 'inquirer';

const snippets = [
  { name: 'getDataGovCollections', path: './src/getDataGovCollections.js' },
];

async function runSnippet() {
  const snippetChoices = snippets.map((snippet) => snippet.name);

  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'snippetName',
      message: 'Choose a snippet to run:',
      choices: snippetChoices,
    },
  ]);

  const selectedSnippet = snippets.find((snippet) => snippet.name === answer.snippetName);

  if (selectedSnippet) {
    console.log(`Running ${selectedSnippet.name}:\n`);

    const { default: snippetFunction } = await import(selectedSnippet.path);

    await snippetFunction();
  } else {
    console.error('Invalid snippet choice.');
  }
}

runSnippet();
