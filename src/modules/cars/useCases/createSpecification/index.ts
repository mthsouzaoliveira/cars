import { SpecificationRepository } from "../../repositories/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationCaseUse } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const createSpecificationCaseUse = new CreateSpecificationCaseUse(
	specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
	createSpecificationCaseUse
);

export { createSpecificationController };
