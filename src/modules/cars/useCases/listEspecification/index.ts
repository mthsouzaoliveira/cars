import { SpecificationRepository } from "../../repositories/SpecificationsRepository";
import { ListSpecificationController } from "./ListSpecificationController";
import { ListSpecificationCaseUse } from "./ListSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();

const listSpecificationCaseUse = new ListSpecificationCaseUse(
	specificationRepository
);
const listSpecificationController = new ListSpecificationController(
	listSpecificationCaseUse
);

export { listSpecificationController };
