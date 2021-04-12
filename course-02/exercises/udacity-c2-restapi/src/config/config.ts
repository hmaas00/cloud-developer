export const config = {
  "dev": {
    "username": process.env.DEV_USERNAME,
    "password": process.env.DEV_PASSWORD,
    "database": process.env.DEV_DATABASE,
    "host": process.env.DEV_HOST,
    "dialect": "postgres",
    "aws_region": process.env.DEV_AWS_REGION,
    "aws_profile": process.env.DEV_AWS_PROFILE,
    "aws_media_bucket": process.env.DEV_AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": process.env.PROD_USERNAME,
    "password": process.env.PROD_PASSWORD,
    "database": process.env.PROD_DATABASE,
    "host": process.env.PROD_HOST,
    "dialect": "postgres"
  }
}
//DB instance identifier:database-udagram-dev
//Master username:postgres
//Master password:udagram0411
//port:5432
//database: udagram
//region:us-east-1f
//endpoint: database-udagram-dev.c2t8f5dniwft.us-east-1.rds.amazonaws.com
