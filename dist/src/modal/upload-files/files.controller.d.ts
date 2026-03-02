import type { Multer } from 'multer';
import { Response } from 'express';
export declare class FilesController {
    uploadFile(file: Multer.File): {
        message: string;
        filename: any;
        url: string;
    };
    getVideos(): {
        filename: string;
        url: string;
        createdAt: Date;
    }[];
    downloadVideo(filename: string, res: Response): void;
}
