// combinedAbi.ts
import { attackFacetAbi, buildFacetAbi, defendFacetAbi, diamondAbi, resourceFacetAbi, stokeFacetAbi, villageFacetAbi } from './StokeFireAbi';
import * as fs from 'fs';

export const combinedAbi = [
    ...attackFacetAbi,
    ...buildFacetAbi,
    ...defendFacetAbi,
    ...diamondAbi,
    ...resourceFacetAbi,
    ...stokeFacetAbi,
    ...villageFacetAbi,
  ];

  fs.writeFileSync('outputAbi.json', JSON.stringify(combinedAbi, null, 2), 'utf-8');