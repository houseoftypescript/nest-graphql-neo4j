import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [
    HealthModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'docs/graphql/schema.graphql',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
