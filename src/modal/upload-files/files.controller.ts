import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'; // Remove Multer from here
import { extname } from 'path';
import { ApiTags } from '@nestjs/swagger';
import type { Multer } from 'multer';

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
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif|pdf)$/)) {
          return cb(new BadRequestException('Only image and pdf files are allowed!'), false);
        }
        cb(null, true);
      },
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  uploadFile(@UploadedFile() file: Multer.File) {
    console.log(' 34 file', file);
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
}
