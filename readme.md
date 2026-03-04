# myCLI

A functional TypeScript-based Command Line Interface (CLI) built with `commander`, `axios`, and `chalk`.

## :pushpin: Project Requirements
- **Object-Oriented Programming**: Structured using classes and objects.
- **11 Custom Commands**: Includes arithmetic, greeting, file information, and API-based data.
- **API Integration**: Fetches data from 5 different external sources.

## :globe_with_meridians: Advanced Features
- **API Integration**:
  - **Weather**: Fetches real-time weather info from `wttr.in`.
  - **Quotes**: Generates random inspirational quotes from `zenquotes.io`.
  - **Pokemon**: Retrieves details from `pokeapi.co`.
  - **Countries**: Fetches country info from `restcountries.com`.
  - **Jokes**: Gets random jokes from `official-joke-api.appspot.com`.
- **Colored Output**: Uses `chalk` for better readability.
- **Help Descriptions**: Each command has its own documentation.
- **Version Support**: `mycli --version` to check current version.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/VIDHITTS/myCLI.git
   cd myCLI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

## Available Commands

| Command | Usage | Description |
| --- | --- | --- |
| `greet` | `mycli greet <name>` | Greets the user. |
| `add` | `mycli add <n1> <n2>` | Sum of two numbers. |
| `subtract` | `mycli subtract <n1> <n2>` | Difference of two numbers. |
| `multiply` | `mycli multiply <n1> <n2>` | Product of two numbers. |
| `divide` | `mycli divide <n1> <n2>` | Division of two numbers. |
| `joke` | `mycli joke` | Random joke. |
| `weather` | `mycli weather <city>` | Weather details for a city. |
| `quote` | `mycli quote` | Random inspirational quote. |
| `pokemon` | `mycli pokemon <name>` | Information about a Pokemon. |
| `country` | `mycli country <name>` | Information about a country. |
| `fileinfo` | `mycli fileinfo <file>` | Basic details of a file. |

## Example Usage

```bash
node dist/cli.js weather London
node dist/cli.js pokemon pikachu
node dist/cli.js country india
node dist/cli.js fileinfo package.json
```
