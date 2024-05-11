# Swap Smart Contract

Welcome to the UniSwap smart contract repository! This project implements a robust solution for swapping USDT (Tether) and WETH (Wrapped Ether) tokens using the renowned Uniswap protocol. Built on the Ethereum blockchain, this contract ensures secure and efficient token exchanges, empowering users with seamless transactions.

## Folder Structure

- **contracts**: Contains the core smart contract code for token swapping.
  - _UniSwap.sol_: Implements the token swapping logic.
- **ignition**: Holds deployment artifacts and build-related information.
  - _deployments_: Stores deployment artifacts for different chains.
  - _modules_: Houses TypeScript modules for interacting with the contract.
- **test**: Includes unit tests ensuring the contract's functionality.
- _gas-report.txt_: Optionally records gas usage estimates for contract interactions.
- _hardhat.config.ts_: Configures the Hardhat development environment.
- _package.json_: Lists project dependencies and scripts.
- _tsconfig.json_: Configures the TypeScript compiler.
- _yarn.lock.txt_: Locks specific package versions for reproducibility.

## Installation

### Prerequisites

Ensure you have Node.js (version >= 14.x.x) and npm (or yarn) installed on your system.

### Setup

1. **Clone Repository**: Clone this repository to your local machine using Git.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` (or `yarn install`) to install required dependencies.

## Testing

### Run Tests

Execute `npm test` (or `yarn test`) to run the unit tests for the smart contract. These tests validate the functionality of the swapping logic.

## Deployment

### Prerequisites

1. An Ethereum node or provider (e.g., Infura, Alchemy) configured in your Hardhat configuration.
2. Sufficient funds in your Ethereum wallet to cover deployment gas costs.

### Deployment Steps

1. **Configure Deployment**: Edit `hardhat.config.ts` to specify the network details (chain ID, URL, private key) for your target deployment environment.
2. **Deploy Contract**: Run `npm run deploy` (or `yarn deploy`) to deploy the smart contract to the configured network. This process compiles the contract, estimates gas costs, and prompts you for confirmation before deployment.
3. **Verify Deployment**: After successful deployment, the contract address will be printed to the console. You can use a blockchain explorer (e.g., Etherscan) to view the deployed contract details.

## Usage

```javascript
    yarn hardhat test

    yarn hardhat ignition deploy --network <network>

```
