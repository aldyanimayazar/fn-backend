export interface IMedia {
    pictureId: string;
    fileName: string; // original file name
    mimeType: string; // e.g. 'image/png'
    fileSize: number; // in bytes
    fileUrl: string; // full public URL or internal path
    uploadedBy: string; // userId of SHOP_KEEPER
    usedIn: string; // e.g. 'product-123' or 'variant-xyz'
    isDeleted: boolean;
}