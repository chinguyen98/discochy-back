import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from 'src/models/user.model';
import { DB_CONFIG } from 'src/shared/configs';
import { MongoDataService } from './mongo-data.service';
import { IDataServices } from 'src/shared/core/data-services.abstract';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: User.model.schema }]),
    MongooseModule.forRoot(DB_CONFIG.MONGO_URL, {
      retryDelay: 500,
      retryAttempts: 3,
    }),
  ],
  providers: [{ provide: IDataServices, useClass: MongoDataService }],
  exports: [IDataServices],
})
export class MongoDataModule {}