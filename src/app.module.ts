import { Module, ValidationPipe } from '@nestjs/common';
import { featureModules } from './modules';
import { PrismaModule } from './services/prisma.module';
import { PrismaService } from './services/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { PubSubModule } from './modules/global/pubsub/pubsub.module';

@Module({
  imports: [...featureModules, PrismaModule, ConfigModule.forRoot(), PubSubModule],
  controllers: [],
  providers: [PrismaService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },],
})
export class AppModule {}
