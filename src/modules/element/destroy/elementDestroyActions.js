import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/element/list/elementListActions";
import ElementService from "modules/element/elementService";

const prefix = "Element_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: ElementService.destroyAll,
  destroySuccessMessageI18nKey: "entities.Element.destroy.success",
  destroyAllSuccessMessageI18nKey: "entities.Element.destroyAll.success",
  redirectTo: "/element",
  listActions,
});
