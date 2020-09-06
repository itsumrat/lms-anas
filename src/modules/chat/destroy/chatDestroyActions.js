import destroyActions from "modules/shared/destroy/destroyActions";
import listActions from "modules/chat/list/chatListActions";
import ChatService from "modules/chat/chatService";

const prefix = "MATTER_DESTROY";

export default destroyActions({
  prefix,
  destroyAllFn: ChatService.destroyAll,
  destroySuccessMessageI18nKey: "entities.Chat.destroy.success",
  destroyAllSuccessMessageI18nKey: "entities.Chat.destroyAll.success",
  redirectTo: "/Chat",
  listActions,
});
