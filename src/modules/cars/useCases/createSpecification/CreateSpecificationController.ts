import { Request, Response } from "express";

import { CreateSpecificationCaseUse } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
	constructor(private createSpecificationCaseUse: CreateSpecificationCaseUse) {}
	handle(request: Request, response: Response): Response {
		try {
			const { name, description } = request.body;
			this.createSpecificationCaseUse.execute({ name, description });

			return response.status(201).send();
		} catch (error) {
			return response.status(400).json({ error: error.message }).send();
		}
	}
}

export { CreateSpecificationController };
