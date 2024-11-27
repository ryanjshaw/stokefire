# Stoke Fire Dune Dashboard Support Scripts & Notes

## Architecture

This is the overall architecture of the Stoke Fire Dune Dashboard.

You can click the hyperlink folders if you open the SVG directly to travel to the relevant Dune workspace folders.

![Overview](./docs/Stoke%20Fire%20Dashboard-Overview.svg)

## Links

1. [Stoke Fire Dashboard](https://dune.com/stoke_fire/dashboard)
2. [Library](https://dune.com/workspace/t/stoke_fire/library)
3. [Events Folder](https://dune.com/workspace/t/stoke_fire/library/folders/Events)
4. [Off-chain Folder](https://dune.com/workspace/t/stoke_fire/library/folders/Off-chain)
5. [Helpers Folder](https://dune.com/workspace/t/stoke_fire/library/folders/Helpers)
6. [Dashboard Folder](https://dune.com/workspace/t/stoke_fire/library/folders/Dashboard)

## Upgrading Contract ABIs

Dune supports in-place updates of ABIs whenever new events are added to the contract. While you can upload an ABI per facet, this is impractical and requires extra work. I wrote a script to automate the process of taking the existing `StokeFireAbi.ts` from the `stokefire-mono-repo` and converting it into a single unified `outputAbi.json` file.

> Note: Decoded projects are a public good and cost nothing to run or update.

### 1. Update `src/StokeFireAbi.ts` from `stokefire-mono-repo`.

### 2. Run the script

```
npm i
npm run build && npm run export-abi

```

This will produce a single unified `outputAbi.json` file in the root directory.

### 3. Upload the `outputAbi.json` file to the Dune 'Submit Contract' UI.

![Flow](./docs/Stoke%20Fire%20Dashboard-Upgrading%20Stoke%20Fire%20Contract.png)

### 4. Events should be visibile in the Dune Data Explorer within a few minutes

### 5. Backfilled event data should be available within 24 hours.