import { Request, Response } from "express";

import { ListSpecificationCaseUse } from "./ListSpecificationUseCase";

class ListSpecificationController {
	constructor(private listSpecificationCaseUse: ListSpecificationCaseUse) {}

	handle(request: Request, response: Response): Response {
		return response.json(this.listSpecificationCaseUse.execute()).send();
	}
}

export { ListSpecificationController };
