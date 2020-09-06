import RegisterService from "modules/register/registerService";
import formActions from "modules/shared/form/formActions";

const prefix = "Register_FORM";

export default formActions({
  prefix,
  createFn: RegisterService.create,
  createSuccessMessageI18nKey: "entities.Register.create.success",
  updateFn: RegisterService.update,
  updateSuccessMessageI18nKey: "entities.Register.update.success",
  findFn: RegisterService.find,
  redirectTo: "/register",
});
