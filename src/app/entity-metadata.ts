import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  AccountMovement: {}
};

const pluralNames = { 
  AccountMovement: 'AccountMovements'
 };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
