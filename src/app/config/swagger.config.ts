import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export const addSwagger = (app: INestApplication) =>{
    const configService = app.get<ConfigService>(ConfigService)

    const appName = configService.get<string>('API_NAME')
    const apiServer = configService.get<string>('API_SERVER')
    const appDescription = configService.get<string>('API_DESCRIPTION')
    const appTags = configService.get<string>('API_TAGS')

    
    const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')

    const configBuilded = config.build()

    const document = SwaggerModule.createDocument(app, configBuilded)

    SwaggerModule.setup('docs', app , document)
}