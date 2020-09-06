import ElementService from "modules/element/elementService";
import formActions from "modules/shared/form/formActions";

const prefix = "Element_FORM";

export default formActions({
  prefix,
  createFn: ElementService.create,
  createSuccessMessageI18nKey: "entities.Element.create.success",
  updateFn: ElementService.update,
  updateSuccessMessageI18nKey: "entities.Element.update.success",
  findFn: ElementService.find,
  redirectTo: "/element",
});
