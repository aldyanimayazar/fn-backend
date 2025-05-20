export interface IVariant {
    isParent: boolean;
    isVariant: number;
    childrenID: IVariantChildren;
}

export interface IVariantChildren {
    variantChildId: string;
    picturesId: number[];
    additionalPrice: string;
}