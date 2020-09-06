import ChatService from "modules/chat/chatService";
import formActions from "modules/shared/form/formActions";

const prefix = "MATTER_FORM";

export default formActions({
  prefix,
  createFn: ChatService.create,
  createSuccessMessageI18nKey: "entities.Chat.create.success",
  updateFn: ChatService.update,
  updateSuccessMessageI18nKey: "entities.Chat.update.success",
  findFn: ChatService.find,
  redirectTo: "/Chat",
});
