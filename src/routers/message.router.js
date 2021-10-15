// books.js
const Router = require('koa-router');
const Service = require('../services/message.service');

// Prefix all routes with /books
const router = new Router({
	prefix: '/api/v1/mensajes',
});

/* ---------------------- Routes ----------------------- */
/* API REST Get All */
router.get('/', async (ctx, next) => {
	const service = new Service();
	const response = await service.getMessage();

	ctx.body = {
		status: 'success',
		message: response,
	};
	next();
});

/* API REST Get x ID */
router.get('/:id', async (ctx, next) => {
	const service = new Service();
	const response = await service.getMessageById(ctx.params.id);
	if (response) {
		ctx.body = {
			status: 'success',
			message: response,
		};
	} else {
		ctx.response.status = 404;
		ctx.body = {
			status: 'error!',
			message: 'productos Not Found with that id!',
		};
	}

	next();
});

/* API REST Post */
router.post('/', async (ctx, next) => {
	// Check if any of the data field not empty
	if (!ctx.request.body.nombre || !ctx.request.body.codigo) {
		ctx.response.status = 400;
		ctx.body = {
			status: 'error',
			message: 'Defina un nombre y codigo como minimo.',
		};
	} else {
		const service = new Service();
		const response = await service.postMessage(ctx.request.body);
		if (response) {
			ctx.body = {
				status: 'success',
				message: response,
			};
		} else {
			ctx.response.status = 404;
			ctx.body = {
				status: 'error!',
				message: 'no se pudo guardar en bd el Message',
			};
		}
	}
	next();
});

/* API REST Put */
router.put('/:id', async (ctx, next) => {
	// Check if any of the data field not empty
	if (!ctx.request.body.nombre || !ctx.request.body.codigo) {
		ctx.response.status = 400;
		ctx.body = {
			status: 'error',
			message: 'Please enter the data',
		};
	} else {
		const service = new Service();
		const response = await service.updateMessage(ctx.params.id, ctx.request.body);
		if (response) {
			ctx.body = {
				status: 'Message actualizado éxitosamente!',
				message: response,
			};
		} else {
			ctx.response.status = 404;
			ctx.body = {
				status: 'error!',
				message: 'no se pudo actualizar en bd el Message',
			};
		}
	}
	next();
});

/* API REST Delete */
router.delete('/:id', async(ctx, next) => {
	const service = new Service();
		const response = await service.deleteProduct(ctx.params.id);
		if (response) {
			ctx.body = {
				status: 'success delete',
				message: response,
			};
		} else {
			ctx.response.status = 404;
			ctx.body = {
				status: 'error!',
				message: 'no se pudo eliminar de la bd el producto',
			};
		}
	next();
});

module.exports = router;
