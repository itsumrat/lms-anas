import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/register/list/registerListActions";
import RegisterService from "modules/register/registerService";

const prefix = "Register_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: RegisterService.destroyAll,
  destroySuccessMessageI18nKey: "entities.Register.destroy.success",
  destroyAllSuccessMessageI18nKey: "entities.Register.destroyAll.success",
  redirectTo: "/register",
  listActions,
});
