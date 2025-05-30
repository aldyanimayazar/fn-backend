import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { MediaRepository } from './model/media.repository';
import { nanoid } from 'nanoid';
import { MediaDocuments } from './model/media.schema';
import { IMedia } from './interface/media.interface';

@Injectable()
export class MediaService {
  constructor(private readonly mediaRepository: MediaRepository) {}

  async create(
    file: Express.Multer.File,
    dto: CreateMediaDto,
  ): Promise<MediaDocuments> {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // Optional validations
    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Only image files are allowed');
    }

    if (file.size > 5 * 1024 * 1024) {
      throw new BadRequestException('Max file size is 5MB');
    }

    const newMedia = await this.mediaRepository.create({
      pictureId: nanoid(),
      fileName: file.originalname,
      mimeType: file.mimetype,
      fileSize: file.size,
      fileUrl: `/uploads/${file.filename}`, // Replace with S3/CDN URL later
      uploadedBy: dto.uploadedBy,
      usedIn: dto.usedIn,
      isDeleted: false,
    });

    return newMedia;
  }

  async findAll(): Promise<Record<string, IMedia>[]> {
    return this.mediaRepository.find({});
  }


  async findOne(pictureId: string): Promise<MediaDocuments> {
    return await this.mediaRepository.findOne({ pictureId });
  }

  async update(
    pictureId: string,
    updateDto: UpdateMediaDto,
  ): Promise<MediaDocuments> {
    return await this.mediaRepository.findOneAndUpdate(
      { pictureId },
      { $set: updateDto },
    );
  }

  async remove(pictureId: string): Promise<MediaDocuments> {
    return await this.mediaRepository.findOneAndUpdate(
      { pictureId },
      { $set: { isDeleted: true } },
    );
  }
}
