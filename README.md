# Easy AI Text Completion

## Description

A simple React-based web application that allows you to submit a text instruction and returns with a text completion which aims to match your instruction. You may submit as many instructions as you want!

## Goals

Here're the main design considerations of this web application.

1. **Client-side processing.** Since we expected both the prompt and response strings to be reasonably short, there is no need for a server for this application.

2. **Quick response.** To ensure a smooth user experience, event-driven API calls are done asynchronously to minimize blocking.

3. **Intuitive user experience.** A preset prompt is provided to guide first-time users. User inputs are also validated at submission, so that illegal input can be corrected on the spot.

## Folder Structure

- `public/...`: Contains the `index.html` file, which is the entry point to the web page and React.js script.
- `src/...`: Contains all the React components. The top-level component is FunWithAIApp.js, and the overall hierarchy is:

  - FunWithAIApp
    - PromptInput
      - EngineDropDown
    - ResponseDisplay
      - Response
  - Utils

- `test/...`: Contains `Utils.test.js` file, which contains unit tests for the utility functions.

## Running Easy File Manipulator

1. You can access the deployed app at https://easy-ai-text-completion.netlify.app/.
2. Alternatively, to run Easy AI Text Completion locally, first download the repository as a ZIP.
3. Unzip and move files into the desired folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open http://localhost:1234/ and verify.
