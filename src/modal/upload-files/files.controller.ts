import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Get, Res, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'; // Remove Multer from here
import { extname } from 'path';
import { ApiTags } from '@nestjs/swagger';
import type { Multer } from 'multer';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';
import { readdirSync, statSync } from 'fs';
import { lookup } from 'mime-types';

@Controller('files')
@ApiTags('Upload Files')
export class FilesController {
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
          cb(null, filename);
        },
      }),
      fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
          'image/jpeg',
          'image/png',
          'image/gif',
          'application/pdf',
          'video/mp4',
          'video/mpeg',
          'video/quicktime',
          'video/x-msvideo',
          'video/x-matroska',
        ];

        if (!allowedMimeTypes.includes(file.mimetype)) {
          return cb(new BadRequestException('Only image, pdf and video files are allowed!'), false);
        }

        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  uploadFile(@UploadedFile() file: Multer.File) {
    if (!file) {
      throw new BadRequestException('File is not provided');
    }
    const fileUrl = `uploads/${file.filename}`;
    return {
      message: 'File uploaded successfully',
      filename: file.filename,
      url: fileUrl,
    };
  }

  @Get('videos')
  getVideos() {
    const videosPath = join(process.cwd(), 'public/uploads');
    const files = readdirSync(videosPath);

    const sortedFiles = files
      .map((file) => {
        const filePath = join(videosPath, file);
        const stats = statSync(filePath);

        return {
          filename: file,
          createdAt: stats.mtime,
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 10);

    return sortedFiles.map((file) => ({
      filename: file.filename,
      url: `uploads/${file.filename}`,
      createdAt: file.createdAt,
    }));
  }

  @Get('videos/download/:filename')
  downloadVideo(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(process.cwd(), 'public/uploads', filename);

    const mimeType = lookup(filePath) || 'application/octet-stream';

    res.set({
      'Content-Type': mimeType,
      'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(filename)}`,
    });

    createReadStream(filePath).pipe(res);
    console.log(123);
  }
}
