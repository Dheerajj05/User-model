import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dheeraj05:brpLOPvKyvUJoGM5@cluster.un7ofs0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster',
    ),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
