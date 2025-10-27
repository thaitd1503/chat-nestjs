import type { Multer } from 'multer';
export declare class FilesController {
    uploadFile(file: Multer.File): {
        message: string;
        filename: any;
        url: string;
    };
}
