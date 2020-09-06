import viewActions from "modules/shared/view/viewActions";
import RegisterService from "modules/register/registerService";

const prefix = "Register_VIEW";

export default viewActions({
  prefix,
  findFn: RegisterService.find,
  redirectToOnError: "/register",
});
