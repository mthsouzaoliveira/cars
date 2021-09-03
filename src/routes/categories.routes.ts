import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
	try {
		const { name, description } = request.body;
		const createCategoryService = new CreateCategoryService(
			categoriesRepository
		);
		createCategoryService.execute({ name, description });
		return response.status(201).send();
	} catch (error) {
		return response.status(400).json({ error: error.message }).send();
	}
});

categoriesRoutes.get("/", (request, response) => {
	const categories = categoriesRepository.findAll();
	return response.json(categories);
});

export { categoriesRoutes };
