export interface Fields extends Array<Field> {
  __typename: string;
  fields: Field[];
}

export type Field = {
  type: Type
  name: string,
  description: string | null
};

export type Type = {
  name: string,
  ofType: OfType
};

interface OfType extends Type {}
