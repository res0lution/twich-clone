import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'


async function bootstrap() {
	const app = await NestFactory.create({}, { rawBody: true })


	app.useGlobalPipes(
		new ValidationPipe({
			transform: true
		})
	)

	await app.listen(3000)
}
bootstrap()
